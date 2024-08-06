import Logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={Logo} alt="Job Tracker" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking </span>App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            voluptatum omnis eius, libero consequatur quaerat praesentium.
            Laborum dolores, dignissimos corporis quas veniam temporibus
            veritatis impedit minus animi, eveniet error officiis!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo
          </Link>
        </div>
        <img src={main} alt="job hunting" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
