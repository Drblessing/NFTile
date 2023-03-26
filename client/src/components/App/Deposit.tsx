import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
  useSigner,
} from 'wagmi';

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
  VStack,
  Link,
} from '@chakra-ui/react';

import { ethers } from 'ethers';

import { useState } from 'react';

import MyToken from '../../assets/MyToken.json';
import SimulatedDAOTeasury from '../../assets/SimulatedDAOTreasury.json';

export const Deposit = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenID, setTokenID] = useState('');

  const { address } = useAccount();
  const { data: signer } = useSigner();

  const { abi: mtknABI, address: mtknAddress } = MyToken;
  const { abi: DAOAbi, address: DAOAddress } = SimulatedDAOTeasury;

  const handleTokenAddressChange = (e: any) => {
    setTokenAddress(e.target.value);
  };

  const handleTokenIDChange = (e: any) => {
    setTokenID(e.target.value);
  };

  const depositToken = async () => {
    let mtkn = new ethers.Contract(mtknAddress as `0x${string}`, mtknABI);

    mtkn = await mtkn.connect(signer);

    await mtkn.approve(DAOAddress as `0x${string}`, tokenID);

    write?.();
  };

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: DAOAddress as `0x${string}`,
    abi: DAOAbi,
    functionName: 'deposit',
    args: [tokenAddress, tokenID],
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
          <Heading size='md'>🏦 Deposit</Heading>
        </CardHeader>
        <CardBody>
          <Stack direction='column' spacing={4}>
            <Text>Deposit your NFT to the contract here:</Text>
            <Input
              value={tokenAddress}
              onChange={handleTokenAddressChange}
              placeholder='Token address'
            />
            <Input
              value={tokenID}
              onChange={handleTokenIDChange}
              placeholder='Token ID'
            />
          </Stack>
        </CardBody>
        <CardFooter>
          <VStack>
            <Button colorScheme='purple' mt={-4} onClick={depositToken}>
              Deposit
            </Button>
            {isSuccess && (
              <VStack>
                <Heading size='md'>Successfully Deposited an NFT</Heading>
                <Link href={`https://www.oklink.com/okc-test/tx/${data?.hash}`}>
                  OKLink
                </Link>
              </VStack>
            )}
          </VStack>
        </CardFooter>
      </Card>
    </>
  );
};
