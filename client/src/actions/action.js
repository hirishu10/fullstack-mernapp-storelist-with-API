import {
  GET_NAMES,
  ADD_NAME,
  DELETE_NAME,
  LOAD_ING,
  GET_LENGTH,
} from "./types";
import axios from "axios";

// GET_NAMES
const getAllNames = () => (dispatch) => {
  axios
    .get("/api/items")
    .then((res) => {
      dispatch({
        type: GET_NAMES,
        payload: res.data,
      });
      dispatch(getLength());
    })
    .catch((err) => {
      console.log("err", err);
    });
};

// ADD_NAME
const addName = (item) => (dispatch) => {
  axios
    .post("/api/items/add", item)
    .then((res) => {
      dispatch({
        type: ADD_NAME,
        payload: res.data,
      });
      dispatch(getAllNames());
    })
    .catch((err) => {
      console.log("err", err);
    });
};

// DELETE_NAME
const deleteName = (item) => (dispatch) => {
  axios
    .delete(`/api/items/delete/${item.id}`)
    .then((res) => {
      dispatch({
        type: DELETE_NAME,
        payload: item.id,
      });
      dispatch(getAllNames());
    })
    .catch((err) => {
      console.log("err", err);
    });
};

// LOAD_ING
const loading = (bol) => {
  return {
    type: LOAD_ING,
    payload: bol,
  };
};

// GET_LENGTH
const getLength = () => (dispatch) => {
  axios.get("/api/items/length").then((res) => {
    dispatch({
      type: GET_LENGTH,
      payload: res.data,
    });
  });
};

export { getAllNames, addName, deleteName, loading };
