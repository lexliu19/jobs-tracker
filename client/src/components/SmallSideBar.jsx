import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import links from '../utils/links.jsx';
import { NavLink } from 'react-router-dom';
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

            <div className="nav-links">
              {links.map((link) => {
                const { path, text, icon } = link;
                return (
                  <NavLink
                    to={path}
                    key={text}
                    className="nav-link"
                    onClick={toggleSidebar}
                    end
                  >
                    <span>{icon}</span>
                    {text}
                  </NavLink>
                );
              })}
            </div>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
