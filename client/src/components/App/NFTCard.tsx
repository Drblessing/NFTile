import { Box, Image, Text, VStack } from '@chakra-ui/react';

export const NFTCard = ({ image, title, description }) => (
  <Box
    maxW='sm'
    borderWidth='1px'
    borderRadius='lg'
    overflow='hidden'
    boxShadow='lg'
  >
    <Image src={image} alt={title} objectFit='cover' />
    <VStack p='6' spacing={3} align='start'>
      <Text fontWeight='bold' fontSize='xl'>
        {title}
      </Text>
      <Text fontSize='md' color='gray.600'>
        {description}
      </Text>
    </VStack>
  </Box>
);
