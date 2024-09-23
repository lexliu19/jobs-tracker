import { FormRow, SubmitBtn, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { redirect, useOutletContext } from 'react-router-dom';
import { Form } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants.js';
import customFetch from '../utils/customFetch.js';
import { toast } from 'react-toastify';
import toastOptions from '../utils/toastOptions.js';

export const addJobAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/jobs', data);
    toast.success('Job added successfully!', toastOptions);
    return redirect('all-jobs');
  } catch (error) {
    toast.error(error?.response?.data?.message, toastOptions);
    return error;
  }
};

const AddJob = () => {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            labelText="Job Location"
            name="jobLocation"
            defaultValue={user?.location}
          />
          <FormRowSelect
            label="Job Status"
            defaultVal={JOB_STATUS.PENDING}
            name="jobStatus"
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            label="Job Type"
            defaultVal={JOB_TYPE.FULL_TIME}
            name="jobType"
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
