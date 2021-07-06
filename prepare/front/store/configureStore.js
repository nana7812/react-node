import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";

import reducer from "../reducers";

const configureStore = () => {
  //store는 state 리듀서 포함
  const store = createStore(reducer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
