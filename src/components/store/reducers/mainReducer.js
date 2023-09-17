const initialState = {
  user: {
    id: 1,
    name: "Tam Long Nguyen",
  },
  jobs: [],
};
//Check localStorage
// localStorage.getItem('jobs');
// console.log(localStorage.getItem("jobs"));
if (!localStorage.getItem("jobs")) {
  localStorage.setItem(
    "jobs",
    JSON.stringify([
      { id: -1, name: "Fixing code" },
      { id: -2, name: "Cleaning house" },
      { id: -3, name: "Doing homework" },
    ])
  );
}
initialState.jobs = [...JSON.parse(localStorage.getItem("jobs"))];
// console.log(localStorage.getItem("jobs"));
// console.log(initialState);
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB":
      const generateId = Math.floor(Math.random() * 100);
      const newJob = { id: generateId, name: action.payload };
      createJob(newJob);
      return { ...state, jobs: [...state.jobs, newJob] };
    case "UPDATE_JOB":
      break;
    case "REMOVE_JOB":
      state.jobs = [...state.jobs.filter((job) => job.id !== action.payload)]; // state
      //localStorage
      const dataJobsStorage = localStorage.getItem("jobs");
      if (!dataJobsStorage) {
        return;
      }
      let dataJobsParsed = JSON.parse(dataJobsStorage);
      //   console.log("dataJobsParsed", dataJobsParsed);
      dataJobsParsed = [
        ...dataJobsParsed.filter((job) => job.id !== action.payload),
      ];
      localStorage.setItem("jobs", JSON.stringify(dataJobsParsed));
      return { ...state, jobs: [...state.jobs] };
    default:
      return state;
  }
};
function createJob(newJob) {
  const dataJobsStorage = localStorage.getItem("jobs");
  if (!dataJobsStorage) {
    return;
  }
  let dataJobsParsed = JSON.parse(dataJobsStorage);
  //   console.log("dataJobsParsed", dataJobsParsed);
  dataJobsParsed.push(newJob);
  localStorage.setItem("jobs", JSON.stringify(dataJobsParsed));
}
export default mainReducer;
