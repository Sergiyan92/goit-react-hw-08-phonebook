import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperation';
import { selectUserName } from 'redux/auth/authSelectors';
const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  const handleLoguot = () => dispatch(logout());

  return (
    <div>
      <h2>Hi, {user}</h2>
      <button type="button" onClick={handleLoguot}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
