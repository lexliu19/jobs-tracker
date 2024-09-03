import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch.js';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import { createContext } from 'react';
import { useContext } from 'react';
import toastOptions from '../utils/toastOptions.js';

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await customFetch.get('/jobs', { params });

    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.message, toastOptions);
    return error;
  }
};

const AllJobsContext = createContext();
const AllJobs = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;
