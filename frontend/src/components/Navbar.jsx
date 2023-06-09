import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={() => console.log('toggle sidebar')}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>

        <div className="btn-container">
          <button className="btn" onClick={() => console.log('show logout')}>
            <FaUserCircle />
            tester
            <FaCaretDown />
          </button>

          <div className="dropdown show-dropdown">
            <button className="dropdown-btn" onClick={() => console.log('logout user')}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
