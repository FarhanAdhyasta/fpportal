import React from 'react';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box bg="pink.800" py={4} px={6} color="white">
        <Box maxWidth="90vw"  margin="0 auto">
            <Flex align="center">
                <ChakraLink as={Link} to="/" data-testid="home-page">
                <Text fontSize="lg" fontWeight="bold">Student Portal</Text>
                </ChakraLink>
                <Spacer />
                <Box as="nav">
                <ChakraLink as={Link} to="/student" data-testid="student-page" mr={4} color="white" _hover={{ textDecoration: 'underline' }}>
                    All Students
                </ChakraLink>
                <ChakraLink as={Link} to="/add" data-testid="add-page" color="white" _hover={{ textDecoration: 'underline' }}>
                    Add Student
                </ChakraLink>
                </Box>
            </Flex>
        </Box>
    </Box>
  );
};

export default NavBar;
