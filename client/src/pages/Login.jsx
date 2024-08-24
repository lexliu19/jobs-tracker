import { Link, redirect, useNavigation, useActionData } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); //convert to key value pair
  const errors = { msg: '' };

  if (!data.password.length < 8) {
    errors.msg = 'Password must be at least 8 characters';
    return errors;
  }
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful!');
    return redirect('/dashboard');
  } catch (error) {
    errors.msg = error?.response?.data?.msg;
    return error;
  }
};
const Login = () => {
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" labelText="Email" />
        <FormRow type="password" name="password" labelText="Password" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting' : 'Submit'}
        </button>
        <button type="button" className="btn btn-block">
          Explore
        </button>
        {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}

        <p>
          Not a member yet?{' '}
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
