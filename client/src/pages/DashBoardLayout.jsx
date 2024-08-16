import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, SmallSidebar, BigSidebar } from '../components';
import { Outlet } from 'react-router-dom';

import { useState, createContext, useContext } from 'react';

const DashboardContext = createContext();
const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const user = { name: 'John' };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const tempDarkTheme = !isDarkTheme;
    setIsDarkTheme(tempDarkTheme);
    document.body.classList.toggle('dark-theme', tempDarkTheme);
    localStorage.setItem('dark-theme', tempDarkTheme);
  };
  const toggleSidebar = () => {
    console.log('toggleSidebar');
    setShowSidebar(!showSidebar);
  };
  const logoutUser = async () => {
    console.log('logoutUser');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <nav>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </nav>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
