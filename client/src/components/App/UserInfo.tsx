import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
  Input,
  Stack,
  Flex,
  Spacer,
} from '@chakra-ui/react';

import { useState } from 'react';

import { useAccount, useContractRead } from 'wagmi';

import { NFTCard } from './NFTCard';

import { erc721ABI } from 'wagmi';
import { BigNumber } from 'ethers';

export const UserInfo = () => {
  const { address, isConnected } = useAccount();
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenID, setTokenID] = useState('');

  const { data, isError, isLoading, isSuccess, status } = useContractRead({
    address: '0xbB01Cc89FE8d659DEa1454611127eE6f830FFA09',
    abi: erc721ABI,
    functionName: 'ownerOf',
    args: [BigNumber.from('0')],
    onError(error) {
      // Do nothing
    },
  });

  const handleTokenAddressChange = (e: any) => {
    setTokenAddress(e.target.value);
  };

  const handleTokenIDChange = (e: any) => {
    setTokenID(e.target.value);
  };

  const punkLink =
    'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F11%2Fnft-cryptopunk-635-recentten-million-usd-bid-announced-000.jpg?w=960&cbr=1&q=90&fit=max';

  return (
    <>
      <Card align='center'>
        <CardHeader>
          <Heading size='md'>🖼️ User NFTs</Heading>
        </CardHeader>
        <CardBody>
          {isConnected ? (
            <Flex>
              {address === data ? (
                <>
                  <NFTCard
                    image={punkLink}
                    title='Punk #123'
                    description='Punk'
                  />
                  <NFTCard
                    image='okxnftSample.png'
                    title='Mock OKC NFT #1'
                    description='NFTILE'
                  />
                </>
              ) : null}
            </Flex>
          ) : (
            <Text fontSize='2xl' fontWeight={'bold'} color='red.500'>
              Please connect your wallet!
            </Text>
          )}
        </CardBody>
      </Card>
    </>
  );
};
