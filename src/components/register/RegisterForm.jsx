import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(register(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <SimpleGrid gap={12} p={12} olumns={2} w={700} ml="auto" mr="auto">
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" type="text" name="name" />
        </FormControl>
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
          label="Register to see contact on phonebook"
          bg="red.600"
        >
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </Tooltip>
      </SimpleGrid>
    </form>
  );
};

export default RegisterForm;
