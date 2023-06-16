import { ContactForm } from 'components/contactform/Contactform';
import { ContactList } from 'components/contactlist/Contactlist';
import { Filter } from 'components/filter/Filter';
import Loader from 'components/loder/Loader';
import Logout from 'components/loyout/logout/Logout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Logout />
      <title>Your contacts</title>
      <ContactForm />
      <Filter />
      <div>{isLoading && !error && <Loader />}</div>
      <ContactList />
    </>
  );
};
export default Contacts;
