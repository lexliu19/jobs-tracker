import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Register,
  Error,
  Admin,
  Login,
  Landing,
  DashboardLayout,
  AddJob,
  AllJobs,
  Stats,
  Profile,
} from './pages';
import { registerAction } from './pages/Register';

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      { path: 'login', element: <Login /> },
      { path: 'dashboard', element: <DashboardLayout /> },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
    children: [
      { index: true, element: <AddJob /> },
      { path: 'all-jobs', element: <AllJobs /> },
      { path: 'stats', element: <Stats /> },
      { path: 'profile', element: <Profile /> },
      { path: 'admin', element: <Admin /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
