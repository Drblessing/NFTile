import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
  useContractRead,
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
  const [tokenId, setTokenId] = useState('');
  const debouncedTokenId = useDebounce(tokenId);
  const { address } = useAccount();
  const { abi: mintableABI, address: mintableAddress } = MyToken;

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: mintableAddress as `0x${string}`,
    abi: mintableABI,
    functionName: 'safeMint',
    args: [address],
    enabled: Boolean(address),
  });

  const { data, isError, isLoading } = useContractRead({
    address: mintableAddress as `0x${string}`,
    abi: mintableABI,
    functionName: 'balanceOf',
    args: [address],
  });

  console.log(data);

  return (
    <>
      <h1>{toString(data)}</h1>
    </>
  );
}
