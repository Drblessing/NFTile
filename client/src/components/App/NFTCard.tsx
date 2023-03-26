import { Box, Image, Text, VStack, Link } from '@chakra-ui/react';

import { JazzIcon } from './DAOMenu';

export const NFTCard = ({ image, title, description, jazzicon = false }) => {
  const imageSize = '200px';

  if (jazzicon) {
    return (
      <Box margin={3}>
        <Box
          maxW='sm'
          borderWidth='1px'
          borderRadius='lg'
          overflow='hidden'
          boxShadow='lg'
        >
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            width={imageSize}
            height={imageSize}
          >
            <JazzIcon seed={240} size={parseInt(imageSize)} />
          </Box>
          <VStack p='6' spacing={3} align='start'>
            <Text fontWeight='bold' fontSize='xl'>
              {title}
            </Text>
          </VStack>
        </Box>
      </Box>
    );
  }
  return (
    <Box margin={3}>
      <Box
        maxW='sm'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        boxShadow='lg'
      >
        <Link href='https://www.oklink.com/okc-test/tokenAddr/0xbb01cc89fe8d659dea1454611127ee6f830ffa09'>
          <Image src={image} alt={title} objectFit='cover' boxSize={'200'} />
        </Link>
        <VStack p='6' spacing={3} align='start'>
          <Text fontWeight='bold' fontSize='xl'>
            {title}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};
