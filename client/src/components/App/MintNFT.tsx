import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
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

export function MintNFTForm() {
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
  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <>
      <Card align='center'>
        <CardHeader>
          <Heading size='md'>🍵 Mint NFT</Heading>
        </CardHeader>
        <CardBody>
          <Stack direction='column' spacing={4}>
            <Text>Mint an NFT on OKC Testnet here:</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              write?.();
            }}
          >
            <Button
              type='submit'
              colorScheme='purple'
              disabled={!write || isLoading}
            >
              {isLoading ? 'Minting...' : 'Mint'}
            </Button>
            <Spacer />
            {isSuccess && (
              <div>
                Successfully minted your NFT!
                <div>
                  <a href={`https://www.oklink.com/okc-test/tx/${data?.hash}`}>
                    OKLink
                  </a>
                </div>
              </div>
            )}
            {(isPrepareError || isError) && (
              <div>Error: {(prepareError || error)?.message}</div>
            )}
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
