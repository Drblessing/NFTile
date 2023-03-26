import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLin,
  Spacer,
  Stack,
  Card,
  CardBody,
  CardHeader,
  Text,
  Grid,
} from '@chakra-ui/react';
import { DarkModeSwitch } from '../DarkModeSwitch';

import { useDao } from '../../context/DAOContext';
import { formattedAddress } from '../../lib/formattedAddress';

import { NFTCard } from './NFTCard';

import { useContractRead } from 'wagmi';

import SimulatedDAOTreasury from '../../assets/SimulatedDAOTreasury.json';
import { useEffect, useState } from 'react';

export const DAOInfo = () => {
  const { daoAddress, setDaoAddress } = useDao();
  const [dataReads, setDataReads] = useState<any>([]);
  const [superJanky, setSuperJanky] = useState<any>(
    Array.from({ length: 100 }, () => true)
  );

  const GnosisMultisig = '0xFd9b9A6B5f99f854d36FFEB801AFe4CC7f7ab982';

  const punkLink =
    'https://cdn.dribbble.com/users/2200637/screenshots/17470306/media/378cb6b7c1e9c4b264d5233cad3f71de.jpg?compress=1&resize=400x300';

  const boredApe =
    'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg';

  const OKCNFT = '/OKCNFT.png';

  const { data, isError, isLoading } = useContractRead({
    address: GnosisMultisig,
    abi: SimulatedDAOTreasury.abi,
    functionName: 'tokenAddresses',
    args: [0],
  });

  const {
    data: data1,
    isError: isError1,
    isLoading: isLoading1,
  } = useContractRead({
    address: GnosisMultisig,
    abi: SimulatedDAOTreasury.abi,
    functionName: 'tokenAddresses',
    args: [1],
  });

  const {
    data: data2,
    isError: isError2,
    isLoading: isLoading2,
  } = useContractRead({
    address: GnosisMultisig,
    abi: SimulatedDAOTreasury.abi,
    functionName: 'tokenAddresses',
    args: [2],
  });
  const {
    data: data3,
    isError: isError3,
    isLoading: isLoading3,
  } = useContractRead({
    address: GnosisMultisig,
    abi: SimulatedDAOTreasury.abi,
    functionName: 'tokenAddresses',
    args: [3],
  });

  const {
    data: data4,
    isError: isError4,
    isLoading: isLoading4,
  } = useContractRead({
    address: GnosisMultisig,
    abi: SimulatedDAOTreasury.abi,
    functionName: 'tokenAddresses',
    args: [4],
  });
  const {
    data: data5,
    isError: isError5,
    isLoading: isLoading5,
  } = useContractRead({
    address: GnosisMultisig,
    abi: SimulatedDAOTreasury.abi,
    functionName: 'tokenAddresses',
    args: [5],
  });

  const {
    data: data6,
    isError: isError6,
    isLoading: isLoading6,
  } = useContractRead({
    address: GnosisMultisig,
    abi: SimulatedDAOTreasury.abi,
    functionName: 'tokenAddresses',
    args: [6],
  });
  const {
    data: data7,
    isError: isError7,
    isLoading: isLoading7,
  } = useContractRead({
    address: GnosisMultisig,
    abi: SimulatedDAOTreasury.abi,
    functionName: 'tokenAddresses',
    args: [7],
  });

  const {
    data: data8,
    isError: isError8,
    isLoading: isLoading8,
  } = useContractRead({
    address: GnosisMultisig,
    abi: SimulatedDAOTreasury.abi,
    functionName: 'tokenAddresses',
    args: [8],
  });
  const {
    data: data9,
    isError: isError9,
    isLoading: isLoading9,
  } = useContractRead({
    address: GnosisMultisig,
    abi: SimulatedDAOTreasury.abi,
    functionName: 'tokenAddresses',
    args: [9],
  });

  const {
    data: data10,
    isError: isError10,
    isLoading: isLoading10,
  } = useContractRead({
    address: GnosisMultisig,
    abi: SimulatedDAOTreasury.abi,
    functionName: 'tokenAddresses',
    args: [10],
  });

  useEffect(() => {
    if (data && superJanky[0]) {
      setDataReads((prev: any) => [...prev, data]);
      setSuperJanky((prev: any) => {
        prev[0] = false;
        return prev;
      });
    }
    if (data1 && superJanky[1]) {
      setDataReads((prev: any) => [...prev, data1]);
      setSuperJanky((prev: any) => {
        prev[1] = false;
        return prev;
      });
    }
    if (data2 && superJanky[2]) {
      setDataReads((prev: any) => [...prev, data2]);
      setSuperJanky((prev: any) => {
        prev[2] = false;
        return prev;
      });
    }
    if (data3 && superJanky[3]) {
      setDataReads((prev: any) => [...prev, data3]);
      setSuperJanky((prev: any) => {
        prev[3] = false;
        return prev;
      });
    }
    if (data4 && superJanky[4]) {
      setDataReads((prev: any) => [...prev, data4]);
      setSuperJanky((prev: any) => {
        prev[4] = false;
        return prev;
      });
    }
    if (data5 && superJanky[5]) {
      setDataReads((prev: any) => [...prev, data5]);
      setSuperJanky((prev: any) => {
        prev[5] = false;
        return prev;
      });
    }
    if (data6 && superJanky[6]) {
      setDataReads((prev: any) => [...prev, data6]);
      setSuperJanky((prev: any) => {
        prev[6] = false;
        return prev;
      });
    }
    if (data7 && superJanky[7]) {
      setDataReads((prev: any) => [...prev, data7]);
      setSuperJanky((prev: any) => {
        prev[7] = false;
        return prev;
      });
    }
    if (data8 && superJanky[8]) {
      setDataReads((prev: any) => [...prev, data8]);
      setSuperJanky((prev: any) => {
        prev[8] = false;
        return prev;
      });
    }
    if (data9 && superJanky[9]) {
      setDataReads((prev: any) => [...prev, data9]);
      setSuperJanky((prev: any) => {
        prev[9] = false;
        return prev;
      });
    }
    if (data10 && superJanky[10]) {
      setDataReads((prev: any) => [...prev, data10]);
      setSuperJanky((prev: any) => {
        prev[10] = false;
        return prev;
      });
    }
  }, [
    data,
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
    data10,
  ]);

  console.log(dataReads);

  return (
    <>
      <Card align='center'>
        <CardHeader>
          <Heading size='md'>🖼️ DAO NFTs</Heading>
        </CardHeader>
        <CardBody>
          <Grid templateColumns='repeat(3, 1fr)' p={6}>
            {daoAddress === '0xD533a949740bb3306d119CC777fa900bA034cd52' && (
              <>
                <NFTCard
                  image={punkLink}
                  title='Punk #123'
                  description='Punk'
                />
                <NFTCard image={boredApe} title='Ape #524' description='Punk' />
                <NFTCard
                  image={OKCNFT}
                  title='OKC NFT #2352'
                  description='Punk'
                />
              </>
            )}
            {daoAddress === '0xFd9b9A6B5f99f854d36FFEB801AFe4CC7f7ab982' && (
              <>
                {dataReads.map((token, index) => (
                  <NFTCard
                    key={index}
                    image={OKCNFT}
                    title='OKC NFT #2352'
                    description='Punk'
                    jazzicon={true}
                  />
                ))}
              </>
            )}
          </Grid>
        </CardBody>
      </Card>
    </>
  );
};
