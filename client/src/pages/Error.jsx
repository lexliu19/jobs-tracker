import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import errorImg from '../assets/images/not-found.svg';
const Error = () => {
  const err = useRouteError();
  if (err.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={errorImg} alt="not found" />
          <h3>WE cannot found the page you are looking for</h3>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <div>
      <h3>Something went wrong :(</h3>
    </div>
  );
};

export default Error;
