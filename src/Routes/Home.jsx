import React from 'react';
import { Button, Box, Flex, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box bg="pink">
      <Flex align="center" justify="center" minHeight="100vh">
        <Stack spacing={6}>
          <Text
            // bgGradient="linear(to-l, #7928CA, #FF0080)"
            // bgClip="text"
            fontSize="5xl"
            fontWeight="extrabold"
          >
            Welcome to Student Portal
          </Text>
          <Button
            as={RouterLink}
            to="/student"
            data-testid="student-btn"
            colorScheme="pink"
            _hover={{
              boxShadow: '0px 0px 10px 1px rgba(255, 0, 0, 0.5)',
              transition: 'box-shadow 0.4s ease-in-out',
            }}
          >
            All Student
          </Button>
        </Stack>
      </Flex>
      <Footer />
    </Box>
  );
};

export default Home;
