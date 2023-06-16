import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresher = useSelector(selectIsRefreshing);
  const shoutRedirect = !isLoggedIn && !isRefresher;

  return shoutRedirect ? <Navigate to={redirectTo} /> : Component;
};
