import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  Box,
  Flex,
  Heading,
  Link as ChakraLin,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { DarkModeSwitch } from '../DarkModeSwitch';

import { useDao } from '../../context/DAOContext';
import { formattedAddress } from '../../lib/formattedAddress';

export const DAOInfo = () => {
  const { daoAddress, setDaoAddress } = useDao();
  return (
    <Heading
      as='h1'
      // position='fixed'
      // left='50%'
      // transform='translateX(-50%)'
      // zIndex='10'
      py={{ base: 0, md: 0 }}
    >
      {' '}
      DAO: {formattedAddress(daoAddress)}
    </Heading>
  );
};
