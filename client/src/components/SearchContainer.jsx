import Wrapper from '../assets/wrappers/DashboardFormPage.js';
import { FormRow, FormRowSelect } from '../components';
import { Form, Link, useSubmit } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE, JOB_SORT_BY } from '../../../utils/constants.js';
import { useAllJobsContext } from '../pages/AllJobs.jsx';

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;
  const submit = useSubmit();

  const debounce = (fn, delay = 2000) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn(form);
      }, delay);
    };
  };
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">Search Form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            }, 1000)}
          />

          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            defaultValue={jobType}
            list={['all', ...Object.values(JOB_TYPE)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            defaultValue={sort}
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
