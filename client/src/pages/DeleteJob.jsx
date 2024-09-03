import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import toastOptions from '../utils/toastOptions.js';
export const deleteJobAction = async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success('Job deleted successfully', toastOptions);
  } catch (error) {
    toast.error(error?.response?.data?.message, toastOptions);
  }
  return redirect('/dashboard/all-jobs');
};
