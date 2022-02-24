import actionCombined from "./actionCombined";
import loginRegisterReducer from "./loginRegisterReducer";
import { combineReducers } from "redux";

const mainReducer = combineReducers({
  actionCombined,
  loginRegisterReducer,
});

export default mainReducer;
