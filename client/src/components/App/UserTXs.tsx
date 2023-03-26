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
} from '@chakra-ui/react';
import { DarkModeSwitch } from '../DarkModeSwitch';

import { useDao } from '../../context/DAOContext';
import { formattedAddress } from '../../lib/formattedAddress';

import SimulatedDAOTeasury from '../../assets/SimulatedDAOTreasury.json';

import { NFTCard } from './NFTCard';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export const UserTXs = () => {
  const [txs, setTXs] = useState([]);
  const { daoAddress, setDaoAddress } = useDao();

  const { abi: DAOAbi, address: DAOAddress } = SimulatedDAOTeasury;

  const punkLink =
    'https://cdn.dribbble.com/users/2200637/screenshots/17470306/media/378cb6b7c1e9c4b264d5233cad3f71de.jpg?compress=1&resize=400x300';

  const boredApe =
    'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg';

  const OKCNFT = '/OKCNFT.png';

  const pullTXs = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
        
    let DAO = new ethers.Contract(DAOAddress as `0x${string}`, DAOAbi, signer);

    let totalTXCount = (await DAO.getTransactionCount()).toNumber();

    let totalTXs = [];

    if (totalTXCount > 0) {
        for (let i = 0; i < totalTXCount; i++) {
            let tx = await DAO.transactions(i);

            if (!tx[3]) {
                totalTXs.push(tx);
            }
        }
    }

    setTXs(totalTXCount);
  };

  useEffect(() => {
    pullTXs();
  }, []);

  const getTXCards = () => {
    let txCards = [];

    txCards.push(<Card>
        <CardBody>
            <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
    </Card>);

    return txCards;
  }

  return (
    <>
      <Card align='center' overflowY="scroll" maxH="40vh" h="40vh">
        <CardHeader>
          <Heading size='md'>⚙️ User Pending TXs</Heading>
        </CardHeader>
        <CardBody>
          <Flex flexDirection="column">
            {getTXCards()}
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};