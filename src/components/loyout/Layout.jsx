import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header>
        <nav>
          <ul>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <div
        style={{
          width: '700px',
          margin: '0 auto',
        }}
      >
        <Outlet />
      </div>
    </>
  );
};
