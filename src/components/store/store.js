import { createStore, combineReducers } from "redux";
import userReducer from "./reducer";
import rootReducer from "./reducers/rootReducer";

const rootReducerMain = combineReducers({
  user: userReducer,
  jobs: rootReducer,
});

const store = createStore(rootReducerMain);

export default store;
