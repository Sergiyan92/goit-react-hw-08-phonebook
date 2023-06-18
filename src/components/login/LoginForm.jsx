import { login } from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(login(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <SimpleGrid gap={12} p={12} columns={2} w={700} ml="auto" mr="auto">
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" type="email" name="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input placeholder="Password" type="password" name="password" />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid justifyContent="center">
        <Tooltip
          hasArrow
          label="Log In to see contact on phonebook"
          bg="red.600"
        >
          <Button type="submit" colorScheme="blue">
            Log In
          </Button>
        </Tooltip>
      </SimpleGrid>
    </form>
  );
};

export default LoginForm;
