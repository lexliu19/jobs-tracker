import { useState, useEffect } from 'react';

import { Logo, FormRow } from '../components/index.js';
import Wrapper from '../assets/wrappers/RegisterPage';

const Register = () => {
  const initialState = { name: '', email: '', password: '', isMember: true };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        <FormRow
          type="text"
          value={values.name}
          name="name"
          handleChange={handleChange}
          labelText="Name"
        />
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
      </form>
    </Wrapper>
  );
};
export default Register;
