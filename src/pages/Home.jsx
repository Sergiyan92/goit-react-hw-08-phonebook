import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Please login or register to see phonebook</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Registration</Link>
    </div>
  );
};

export default Home;
