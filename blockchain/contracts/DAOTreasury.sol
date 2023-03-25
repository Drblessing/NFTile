// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

import { UD60x18, ud, intoUint256 } from "@prb/math/src/UD60x18.sol";

import "./DivisibleNFT.sol";

// Maybe create a Multisig contract then inherit it in the SimulatedDAOTreasury

contract SimulatedDAOTreasury is IERC721Receiver {
    function onERC721Received(address, address, uint256, bytes calldata) external pure returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }
}