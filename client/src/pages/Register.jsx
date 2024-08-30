import { Link, redirect, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); //convert to key value pair

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful!');
    return redirect('/login');
  } catch (error) {
    console.log(error?.response?.data?.message);
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form className="form" method="post">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" labelText="Name" />
        <FormRow type="text" name="lastName" labelText="Last Name" />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />

        <SubmitBtn />
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
