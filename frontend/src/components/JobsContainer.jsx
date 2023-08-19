import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import Wrapper from '../assets/wrappers/JobsContainer';
import Job from './Job';
import { PageBtnContainer } from '../components/index';
const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    numOfPages,
    totalJobs,
    page,
    search,
    searchStatus,
    searchType,
    sort,
  } = useAppContext();
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) return <Wrapper>No jobs to display :(</Wrapper>;
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
