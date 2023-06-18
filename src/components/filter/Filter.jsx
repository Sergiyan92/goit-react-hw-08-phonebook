import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filteredContacts } from 'redux/contactsSlice';
import { FormControl, FormLabel, Input, SimpleGrid } from '@chakra-ui/react';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilterChange = event => {
    dispatch(filteredContacts(event.target.value));
  };
  return (
    <>
      <SimpleGrid p={12} w={700} ml="auto" mr="auto">
        <FormControl>
          <FormLabel>Find contacts by name</FormLabel>
          <Input
            placeholder="Search name"
            type="text"
            name="number"
            value={filter}
            onChange={handleFilterChange}
          />
        </FormControl>
      </SimpleGrid>
    </>
  );
};
