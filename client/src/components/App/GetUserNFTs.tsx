import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
  useContractRead,
  useContract,
} from 'wagmi';
import { useEffect, useState } from 'react';

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
  FormControl,
  Spacer,
} from '@chakra-ui/react';

import MyToken from '../../assets/MyToken.json';

import { ethers } from 'ethers';

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function GetUserNFTs() {
  const [myTokens, setMyTokens] = useState([]);
  const { address } = useAccount();
  const { abi: mintableABI, address: mintableAddress } = MyToken;

  const { data, isError, isLoading } = useContractRead({
    address: mintableAddress as `0x${string}`,
    abi: mintableABI,
    functionName: 'balanceOf',
    args: [address],
  });
  const {
    data: data1,
    isError: isError1,
    isLoading: isL,
  } = useContractRead({
    address: mintableAddress as `0x${string}`,
    abi: mintableABI,
    functionName: 'symbol',
  });

  const contract = useContract({
    address: mintableAddress as `0x${string}`,
    abi: mintableABI,
  });

  useEffect(() => {
    const test = contract.connect(address);
    console.log(test.signer);
  }, [contract]);

  return (
    <>
      <h1>
        {data?.toString()} {data1?.toString()}
      </h1>
    </>
  );
}
