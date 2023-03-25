import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Flex,
  Box,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';

import { Container } from '../components/Container';

import { AppHeader } from '../components/App/AppHeader';

// Import your DAO and User components here
import { DAOInfo } from '../components/App/DAOInfo';
import { UserInfo } from '../components/App/UserInfo';

const App = () => (
  <Container height='100vh'>
    <AppHeader />
    <Flex width='100%' alignItems='flex-start' justifyContent='space-between'>
      <Box flex='1' padding='5' maxWidth='50%'>
        <DAOInfo />
      </Box>
      <Box flex='1' padding='5' maxWidth='50%'>
        <UserInfo />
      </Box>
    </Flex>
  </Container>
);

export default App;
