import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';

import NavLinks from './NavLinks.jsx';
const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <button className="close-btn" type="button" onClick={toggleSidebar}>
            <FaTimes />
            <header>
              <Logo />
            </header>

            <NavLinks />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
