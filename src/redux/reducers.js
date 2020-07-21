import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import superReducer from "../middlewares/superReducer";

const rootReducer = combineReducers({
  appReducer,
  superReducer,
});

export default rootReducer;
