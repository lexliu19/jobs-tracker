import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo';
import main from '../assets/images/main.svg';
import { Link, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const Landing = () => {
  const { user } = useAppContext();

  return (
    <>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              Your Personal <span>Job Tracking</span> Application
            </h1>
            <p>Streamline Your Job Hunt Process With Jobfiy!</p>

            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </>
  );
};
export default Landing;
