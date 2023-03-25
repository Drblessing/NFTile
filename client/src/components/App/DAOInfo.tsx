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

import { NFTCard } from './NFTCard';

export const DAOInfo = () => {
  const { daoAddress, setDaoAddress } = useDao();

  const punkLink =
    'https://cdn.dribbble.com/users/2200637/screenshots/17470306/media/378cb6b7c1e9c4b264d5233cad3f71de.jpg?compress=1&resize=400x300';

  const boredApe =
    'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg';

  const OKCNFT = '/OKCNFT.png';

  return (
    <>
      <Card align='center'>
        <CardHeader>
          <Heading size='md'>🖼️ DAO NFTs</Heading>
        </CardHeader>
        <CardBody>
          <Flex>
            <NFTCard image={punkLink} title='Punk #123' description='Punk' />
            <NFTCard image={boredApe} title='Ape #524' description='Punk' />
            <NFTCard image={OKCNFT} title='OKC NFT #2352' description='Punk' />
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};
