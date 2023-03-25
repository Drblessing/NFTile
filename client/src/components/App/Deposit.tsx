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
} from '@chakra-ui/react';

import { useState } from 'react';

export const Deposit = () => {
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenID, setTokenID] = useState('');

  const handleTokenAddressChange = (e: any) => {
    setTokenAddress(e.target.value);
  };

  const handleTokenIDChange = (e: any) => {
    setTokenID(e.target.value);
  };

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
          <Button colorScheme='purple'>Deposit</Button>
        </CardFooter>
      </Card>
    </>
  );
};
