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

export const Header = () => {
  return (
    <Flex
      as='header'
      justifyContent='space-between'
      alignItems='center'
      padding='1rem'
      width='100%'
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'center' }}
        justifyContent='space-between'
        width='100%'
        spacing={{ base: '4rem', md: 4 }}
      >
        <Box py={{ base: 4, md: 0 }}></Box>

        <Heading
          as='h1'
          position='fixed'
          left='50%'
          transform='translateX(-50%)'
          zIndex='10'
          py={{ base: 0, md: 0 }}
        >
          🪟 NFTile
        </Heading>
        <Flex gap={4}>
          <ConnectButton />
          <DarkModeSwitch />
        </Flex>
      </Stack>
    </Flex>
  );
};
