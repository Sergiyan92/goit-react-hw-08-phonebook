import css from './Contactform.module.css';
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
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label className={css.label}>Name</label>
      <input
        className={css.input}
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
      <label className={css.label}>Phone</label>
      <input
        className={css.input}
        type="tel"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <button className={css.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};
