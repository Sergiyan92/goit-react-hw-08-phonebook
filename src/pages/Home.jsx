import { Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Heading p={5} textAlign={['left', 'center']}>
        Please login or register to see phonebook
      </Heading>
      <SimpleGrid display="flex" justifyContent="center">
        <Link to="/login">
          <Text mr="5" fontSize="2xl" color="red">
            Login
          </Text>
        </Link>
        <Link to="/register">
          <Text fontSize="2xl" color="red">
            Registration
          </Text>
        </Link>
      </SimpleGrid>
    </div>
  );
};

export default Home;
