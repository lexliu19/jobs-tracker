import { Link, redirect, Form, useNavigate } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { Logo, SubmitBtn, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import toastOptions from '../utils/toastOptions.js';

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); //convert to key value pair

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful!', toastOptions);
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.message, toastOptions);
    return error;
  }
};
const Login = () => {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'password123',
    };
    console.log('data', data);

    try {
      await customFetch.post('/auth/login', data);
      toast.success('You are testing the demo...');
      navigate('/dashboard/all-jobs');
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" labelText="Email" />
        <FormRow type="password" name="password" labelText="Password" />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          Test Demo
        </button>

        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
