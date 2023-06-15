import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filteredContacts } from 'redux/contactsSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilterChange = event => {
    dispatch(filteredContacts(event.target.value));
  };
  return (
    <>
      <label className={css.labelSearch}>Find contacts by name</label>
      <input
        className={css.inputSearch}
        type="text"
        name="filter"
        placeholder="Search"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  handleFilterChange: PropTypes.func,
};
