import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import apiCallsMiddleware from "../middlewares/apiCallsMiddleware";

const configureRedux = (initialState) => {
  const composeEnhancers = composeWithDevTools({});

  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(apiCallsMiddleware))
  );
};

export default configureRedux;
