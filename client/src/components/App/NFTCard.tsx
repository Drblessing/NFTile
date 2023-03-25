import { Box, Image, Text, VStack } from '@chakra-ui/react';

export const NFTCard = ({ image, title, description }) => (
  <Box margin={3}>
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='lg'
    >
      <Image src={image} alt={title} objectFit='cover' boxSize={'200'} />
      <VStack p='6' spacing={3} align='start'>
        <Text fontWeight='bold' fontSize='xl'>
          {title}
        </Text>
        {/* <Text fontSize='md' color='gray.600'>
          {description}
        </Text> */}
      </VStack>
    </Box>
  </Box>
);
