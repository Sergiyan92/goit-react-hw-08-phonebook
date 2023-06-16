import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './loyout/Layout';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './restricted/RestrictedRoute';
import { PrivateRoute } from './privateroute/PrivateRoute';
import { refreshUser } from 'redux/auth/authOperation';
import Loader from './loder/Loader';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresher = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresher ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<p>No page found</p>} />
      </Route>
    </Routes>
  );
};
