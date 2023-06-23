import React from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <>
      <h1>404 | Not Found</h1>
      <Button onClick={handleGoBack}>Back</Button>
    </>
  );
};

export default NotFound;
