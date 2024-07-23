import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import main from '../../assets/images/main.svg';

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="JobTracker" className="logo" />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            Job<span>Tracking</span> Platform
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, eius
            illo. A earum nobis, voluptate nemo temporibus consectetur libero
            eveniet, quod voluptatibus quos ipsum aperiam dolorem saepe quae id.
            Sit.
          </p>

          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login in/Demo User
          </Link>
        </div>
        <img src={main} alt="Job Hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}
