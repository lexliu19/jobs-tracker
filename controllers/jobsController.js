const createJob = async (req, res) => {
  res.send('create Job');
};
const getAllJobs = async (req, res) => {
  res.send('get all Job');
};
const deleteJobs = async (req, res) => {
  res.send('delete Job');
};
const updateJob = async (req, res) => {
  res.send('update Job');
};
const showStats = async (req, res) => {
  res.send('show stats Job');
};

export { createJob, getAllJobs, deleteJobs, updateJob, showStats };
