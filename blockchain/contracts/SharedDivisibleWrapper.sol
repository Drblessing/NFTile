// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

import { UD60x18, ud, intoUint256 } from "@prb/math/src/UD60x18.sol";

import "./DivisibleNFT.sol";

// Maybe create a Multisig contract then inherit it in the SimulatedDAOTreasury

contract SharedDivisibleWrapper is IERC721Receiver {
    // "DAO" and Divisible NFT functionality
    event Wrapped(address indexed token, uint256 indexed tokenId, address indexed divisibleNFT);

    struct UnderlyingToken {
        address token;
        uint256 tokenId;
    }

    struct WrappedToken {
        address token;
        uint256 amount;
        UnderlyingToken underlyingToken;
    }

    WrappedToken[] public tokenAddresses; // abi.encode token address + tokenId

    function getWrappedTokenAddresses() public view returns(WrappedToken[] memory) {
        return tokenAddresses;
    }
   
    function wrap(address token, uint256 tokenId, address[] calldata owners) public {
        IERC721(token).safeTransferFrom(msg.sender, address(this), tokenId); // Transfer NFT into this contract

        DivisibleNFT DNFT = new DivisibleNFT(msg.sender); // Create new Divisible NFT

        IERC721(token).approve(address(DNFT), tokenId);

        DNFT.wrap(address(this), 1e18, IERC721Metadata(token).tokenURI(tokenId), token, tokenId); // Wrap NFT

        tokenAddresses.push(WrappedToken(address(DNFT), 1e18, UnderlyingToken(token, tokenId)));

        // Create a Pull-Payment model to claim fractions of NFT or Just Distribute to them directly

        for (uint i = 0; i < owners.length; i++) {
            UD60x18 allocatedAmount = ud(1e18).div(ud((owners.length * 1e18)));
            DNFT.transferFrom(address(this), owners[i], DNFT.tokenOfOwnerByIndex(address(this), 0), intoUint256(allocatedAmount));
        }

        emit Wrapped(token, tokenId, address(DNFT));
    }

    function onERC721Received(address, address, uint256, bytes calldata) external pure returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }
}