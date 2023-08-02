import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useAppContext } from '../../context/appContext';
import { Alert, FormRow, FormRowSelect } from '../../components/index';
const AddJob = () => {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }

    console.log('create ');
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        {showAlert && <Alert />}

        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value="position"
            handleChange={handleJobInput}
          />

          <FormRow
            type="text"
            name="company"
            value="company"
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            labelText="location"
            name="jobLocation"
            value="jobLocation"
            handleChange={handleJobInput}
          />

          <FormRowSelect
            name="jobType"
            labelText="Job Type"
            value={jobType}
            handleChange={handleJobInput}
            dataList={jobTypeOptions}
          />

          <FormRowSelect
            name="status"
            labelText="Status"
            value={status}
            handleChange={handleJobInput}
            dataList={statusOptions}
          />
          <div className="btn-container">
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
