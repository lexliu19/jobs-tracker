import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, SmallSidebar, BigSidebar } from '../components';
import { Outlet, useLoaderData, redirect, useNavigate } from 'react-router-dom';

import { useState, createContext, useContext } from 'react';
import customFetch from '../utils/customFetch.js';
import { toast } from 'react-toastify';
export const loader = async () => {
  try {
    const { data } = await customFetch('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext();
const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const { user } = useLoaderData();
  // console.log('user', user);

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);
  const navigate = useNavigate();

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
    navigate('/');
    await customFetch('/auth/logout');
    toast.success('Logged out successfully');
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
              <Outlet context={{ user }} />
            </div>
          </nav>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
