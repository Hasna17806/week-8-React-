import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

// Optional middleware example (logger)
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Action:", action);
  return next(action);
};

// Enable Redux DevTools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(loggerMiddleware)) // pass middleware + devtools
);

export default store;
