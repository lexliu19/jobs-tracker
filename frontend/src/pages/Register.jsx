import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo, FormRow, Alert } from '../components/index.js';
import { useAppContext } from '../context/appContext.js';
import Wrapper from '../assets/wrappers/RegisterPage.js';

const Register = () => {
  const initialState = { name: '', email: '', password: '', isMember: false };
  const [values, setValues] = useState(initialState);

  const { user, isLoading, showAlert, displayAlert, setupUser } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({ currentUser, endpoint: 'login', alertText: 'Login Successful! Redirecting' });
    } else {
      setupUser({
        currentUser,
        endpoint: 'register',
        alertText: 'Register Successful! Redirecting...',
      });
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
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
        <button className="btn btn-block" type="submit" disabled={isLoading}>
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
