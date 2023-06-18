import { useDispatch, useSelector } from 'react-redux';
import css from './Contactlist.module.css';
import { getFilter, selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { Button, SimpleGrid, Text, Tooltip } from '@chakra-ui/react';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilter);

  const visibleContactList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const visibleContacts = visibleContactList();
  return (
    <>
      <SimpleGrid display="grid" p={12} columns={2} w={700} ml="auto" mr="auto">
        <ul>
          {visibleContacts?.map(contact => (
            <li key={contact.id} className={css.item}>
              <Text fontSize="2xl" mr="auto">
                {contact.name} - {contact.number}
              </Text>
              <Tooltip
                hasArrow
                label="Delete Contact on phonebook"
                bg="red.600"
              >
                <Button
                  gap={12}
                  colorScheme="red"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </Button>
              </Tooltip>
            </li>
          ))}
        </ul>
      </SimpleGrid>
    </>
  );
};
