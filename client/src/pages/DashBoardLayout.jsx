import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashBoardPage';
import SmallSideBar from '../components/SmallSideBar';
import BigSideBar from '../components/BigSideBar';
import NavBar from '../components/Navbar';

const DashBoardLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSideBar />
        <BigSideBar />
        <div>
          <NavBar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default DashBoardLayout;
