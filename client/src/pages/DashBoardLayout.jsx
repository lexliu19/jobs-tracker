import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, SmallSidebar, BigSidebar } from '../components';
import { Outlet } from 'react-router-dom';

import { useState, createContext, useContext } from 'react';

const DashboardContext = createContext();
const DashboardLayout = () => {
  const user = { name: 'John' };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log('toggleDarkTheme');
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
