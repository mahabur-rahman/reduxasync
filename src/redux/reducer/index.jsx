import { combineReducers } from "redux";

import counterReducer from "./reducers";

import userReducer from "./userReducer";

export default combineReducers({
  counterReducer,
  userReducer,
});
