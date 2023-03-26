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

  const [txHash, setTXHash] = useState('');
  const [isSuccess, setSuccess] = useState(false);

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
    setSuccess(false);
    
    let mtkn = new ethers.Contract(mtknAddress as `0x${string}`, mtknABI, signer);
    let DAO = new ethers.Contract(DAOAddress as `0x${string}`, DAOAbi, signer);

    let tx = await mtkn.approve(DAOAddress as `0x${string}`, tokenID);

    await tx.wait();

    /* Initiate Multisig TX */
    // await DAO.submitTransaction(mtknAddress, 0, mtkn.interface.encodeFunctionData("safeMint", [DAOAddress]));
    /* End Snippet */

    tx = await DAO.deposit(tokenAddress, tokenID);

    setTXHash(tx.hash);

    setSuccess(true);

    // write?.();
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

  /*const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });*/

  return (
    <>
      <Card align='center' maxW="40vw" w="40vw">
        <CardHeader>
          <Heading size='md'>🏦 Deposit</Heading>
        </CardHeader>
        <CardBody>
          <Stack direction='column' spacing={4}>
            <Text>Deposit your NFT into the contract here:</Text>
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
                <Link href={`https://www.oklink.com/okc-test/tx/${txHash}`}>
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
