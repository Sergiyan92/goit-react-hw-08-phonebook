import {
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setNane] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setNane(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isExist = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase() || el.number === number
    );

    if (isExist) {
      alert('Contact already exists');
      return;
    }
    dispatch(addContact({ name, number }));
    setNane('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <SimpleGrid w={700} gap={12} ml="auto" mr="auto" p={12} columns={2}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Name"
            type="text"
            onChange={handleChange}
            name="name"
            value={name}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            placeholder="Phone"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid justifyContent="center">
        <Tooltip hasArrow label="Add Contact on phonebook" bg="red.600">
          <Button type="submit" colorScheme="blue">
            Add Contact
          </Button>
        </Tooltip>
      </SimpleGrid>
    </form>
  );
};
