import { useState, useEffect } from 'react';

import { Logo, FormRow, Alert } from '../components/index.js';
import Wrapper from '../assets/wrappers/RegisterPage';

const Register = () => {
  const initialState = { name: '', email: '', password: '', isMember: true, showAlert: true };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            handleChange={handleChange}
            labelText="Name"
          />
        )}
        <FormRow
          type="email"
          value={values.email}
          name="email"
          handleChange={handleChange}
          labelText="Email"
        />
        <FormRow
          type="password"
          value={values.password}
          name="password"
          handleChange={handleChange}
          labelText="Password"
        />
        <button className="btn btn-block" type="submit">
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
