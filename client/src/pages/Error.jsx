import { useRouteError, Link } from 'react-router-dom';
import notFoundImage from '../../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

export default function Error() {
  const error = useRouteError();
  console.log(error); //undefined

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong.</h3>
      </div>
    </Wrapper>
  );
}
