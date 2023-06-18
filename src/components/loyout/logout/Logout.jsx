import { Button, SimpleGrid, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperation';
import { selectUserName } from 'redux/auth/authSelectors';
import { Heading } from '@chakra-ui/react';
const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  const handleLoguot = () => dispatch(logout());
  return (
    <div>
      <SimpleGrid gap={12} p={12} columns={2}>
        <Heading color="brand">Hi, {user}</Heading>
        <Tooltip hasArrow label="If you want to finish" bg="red.600">
          <Button ml="auto" w={150} colorScheme="blue" onClick={handleLoguot}>
            Logout
          </Button>
        </Tooltip>
      </SimpleGrid>
    </div>
  );
};

export default Logout;
