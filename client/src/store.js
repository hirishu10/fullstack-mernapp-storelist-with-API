import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers";

const initialState = {};
const midelware = [thunk];

const store = createStore(
  mainReducer,
  initialState,
  compose(
    applyMiddleware(...midelware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
