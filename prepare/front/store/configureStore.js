import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

const configureStore = () => {
  //store는 state 리듀서 포함
  //액션 미들웨어
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV == "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
