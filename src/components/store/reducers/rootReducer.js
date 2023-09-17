// const initState = {
//   users: [
//     { id: 1, name: "Tam Long" },
//     { id: 2, name: "Diem Linh" },
//   ],
// };

// const rootReducer = (state = initState, action) => {
//   return state;
// };

// export default rootReducer;

const initialState = {
  jobs: [
    { id: 1, name: "Fixing code" },
    { id: 2, name: "Cleaning house" },
    { id: 3, name: "Doing homework" },
  ],
  boss: { name: "Tam long Nguyen", age: 30 },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB":
      console.log(action);
      const generateId = Math.floor(Math.random() * 100);
      const newJob = { id: generateId, name: action.payload.job.name };
      return { ...state, jobs: [...state.jobs, newJob] };
    case "DELETE_JOB":
      console.log(" delete action ", action);
      state.jobs = [...state.jobs.filter((job) => job.id !== action.payload)];
      return { ...state, jobs: state.jobs };
    case "UPDATE_JOB":
      const index = state.jobs.findIndex((job) => {
        return job.id === action.payload.id;
      });
      console.log(index);

      state.jobs[index].name = action.payload.name;

      return { ...state, jobs: [...initialState.jobs] };
    default:
      return state;
  }
};

export default rootReducer;
