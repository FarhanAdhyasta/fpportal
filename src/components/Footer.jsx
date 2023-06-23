import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box className="footer" bg="pink.900" py={16} px={6} color="white" marginTop="10rem">
      <Text>
        <p className="studentName">FarhanAdhyasta</p>
        <p className="studentId">FE5045477</p>
      </Text>
    </Box>
  );
};

export default Footer;
