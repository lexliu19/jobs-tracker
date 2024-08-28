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
  EditJob,
} from './pages';

import { registerAction } from './pages/Register';

import { loginAction } from './pages/Login';
import { addJobAction } from './pages/AddJob';
import { editJobAction } from './pages/EditJob';
import { deleteJobAction } from './pages/DeleteJob';

import { loader as EditJobLoader } from './pages/EditJob';
import { loader as DashboardLoader } from './pages/DashboardLayout';
import { loader as allJobsLoader } from './pages/AllJobs';

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
      { path: 'login', element: <Login />, action: loginAction },
      { path: 'dashboard', element: <DashboardLayout /> },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
    loader: DashboardLoader,
    children: [
      { index: true, element: <AddJob />, action: addJobAction },
      { path: 'all-jobs', element: <AllJobs />, loader: allJobsLoader },
      {
        path: 'edit-job/:id',
        element: <EditJob />,
        loader: EditJobLoader,
        action: editJobAction,
      },

      {
        path: 'delete-job/:id',
        action: deleteJobAction,
      },
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
