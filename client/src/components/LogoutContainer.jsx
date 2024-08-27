import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user?.avatar ? (
          <img src={user.avatar} alt={user.name} className="img" />
        ) : (
          <FaUserCircle />
        )}

        {user?.name}
        <FaCaretDown />
      </button>

      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
