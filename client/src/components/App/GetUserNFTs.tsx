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

  // Use useState to manage the contract instance and data
  const [contractInstance, setContractInstance] = useState(null);
  const [tokenName, setTokenName] = useState('');

  // Initialize contract instance when component mounts
  useEffect(() => {
    const initContract = async () => {
      try {
        // Replace this with your Ethereum provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Connect to contract
        const contract = new ethers.Contract(
          mintableAddress,
          mintableABI,
          provider
        );
        setContractInstance(contract);
      } catch (error) {
        console.error('Error initializing contract:', error);
      }
    };

    initContract();
  }, []);

  // Fetch token name when contract instance is available
  useEffect(() => {
    const fetchTokenName = async () => {
      try {
        if (contractInstance) {
          const name = await contractInstance.symbol();
          setTokenName(name);
        }
      } catch (error) {
        console.error('Error fetching token name:', error);
      }
    };

    fetchTokenName();
  }, [contractInstance]);

  return (
    <>
      <h1>
        {data.toString()} {data1.toString()}
      </h1>
    </>
  );
}
