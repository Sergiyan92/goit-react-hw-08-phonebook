import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Link, Outlet } from 'react-router-dom';
import { Grid } from '@chakra-ui/react';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav>
          <ul>
            {isLoggedIn ? (
              <>
                <Grid
                  fontWeight={500}
                  textAlign={['left', 'center']}
                  padding={5}
                  fontSize="2xl"
                  color="white"
                  bgColor="blue"
                  m="0, auto"
                >
                  <Link to="/contacts">Contacts</Link>
                </Grid>
              </>
            ) : (
              <>
                <Grid
                  fontWeight={500}
                  textAlign={['left', 'center']}
                  padding={5}
                  fontSize="2xl"
                  color="white"
                  bgColor="blue"
                  m="0, auto"
                >
                  <Link to="/">Home</Link>
                </Grid>
              </>
            )}
          </ul>
        </nav>
      </header>
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Outlet />
      </div>
    </>
  );
};
