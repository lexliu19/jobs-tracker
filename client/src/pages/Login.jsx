import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage';
import { FormRow } from '../components';
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <h4>Log in</h4>
        <FormRow type="email" name="email" defaultValue="JohnDoe@gmail.com" />
        <FormRow type="password" name="password" defaultValue="screct111" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-block">
          Try Demo
        </button>
        <p>
          Not a Member yet?{' '}
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
