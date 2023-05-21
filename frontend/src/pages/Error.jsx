import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="Page not found" />
        <h3>Page not found</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
