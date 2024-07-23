import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage';

import { FormRow } from '../components';
export default function Register() {
  return (
    <Wrapper>
      <form className="form">
        <h4>Register</h4>
        <FormRow type="text" name="name" labelText="Name" />
        <FormRow type="lastName" name="lastName" labelText="Last Name" />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
