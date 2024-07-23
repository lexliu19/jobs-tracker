import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Login,
  Register,
  DashBoardLayout,
  Landing,
  Error,
} from './pages/index.js';

const router = createBrowserRouter([
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
      { path: '/dashboard', element: <DashBoardLayout /> },
    ],
  },

  { path: '/landing', element: <Landing /> },
  { path: '*', element: <Error /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
