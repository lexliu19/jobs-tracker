import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout.js';
import { Navbar, SmallSidebar, BigSidebar } from '../../components/index.js';
const ShareLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page"></div>
        </div>
      </main>
      <Outlet />
    </Wrapper>
  );
};
export default ShareLayout;
