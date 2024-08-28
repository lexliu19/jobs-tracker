import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer.js';
import { toast } from 'react-toastify';
import { Stat } from '../components';
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';

export const loader = async () => {
  try {
    const res = await customFetch.get('/users/admin/app-stats');
    return res.data;
  } catch (error) {
    console.log(error);
    toast.error("You're not authorized to view this page");
    return redirect('/dashboard');
  }
};
const Admin = () => {
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
      <Stat
        title="Current users"
        count={users}
        color="#e9b49"
        bgColor="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <Stat
        title="Total Jobs"
        count={jobs}
        color="#647acb"
        bgColor="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};

export default Admin;
