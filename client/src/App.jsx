import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Login,
  Register,
  DashBoardLayout,
} from './pages/index.js';
const router = createBrowserRouter([
  { path: '/', element: <HomeLayout /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/dashboard', element: <DashBoardLayout /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
