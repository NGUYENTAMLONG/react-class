import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import "./styles/global.scss";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import store from "./components/store/store";
import { combineReducers, createStore } from "redux";
import mainReducer from "./components/store/reducers/mainReducer";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import rootReducer from "./components/store/reducers/rootReducer";
// import { createStore, combineReducers } from "redux";
// const myRootReducer = combineReducers({
//   data: rootReducer.job,
// });
// const payloadRedux = createStore(myRootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
const rootReducer = combineReducers({
  data: mainReducer,
});
const store = createStore(rootReducer);
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
