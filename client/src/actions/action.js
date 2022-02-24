import {
  GET_NAMES,
  ADD_NAME,
  DELETE_NAME,
  LOAD_ING,
  GET_LENGTH,
} from "./types";
import axios from "axios";

/**
 *
 * @returns Return all the Items from the database
 */
export const getAllNames = () => (dispatch) => {
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

/**
 *
 * @param {*} token Provide token which you received after login or register with us
 * @param {*} item Provide the Item details to add successfully in our database
 * @returns Return successfull message or error message if have any error
 */
export const addName = (token, item) => (dispatch) => {
  axios
    .post("/api/items/add", item, {
      headers: {
        "x-auth-token": token,
      },
    })
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

/**
 *
 * @param {*} token Provide token which you received after login or register with us
 * @param {*} item Provide the Item details to delete successfully from our database
 * @returns Return successfull message or error message if have any error
 */
export const deleteName = (token, item) => (dispatch) => {
  axios
    .delete(`/api/items/delete/${item.id}`, {
      headers: {
        "x-auth-token": token,
      },
    })
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

/**
 *
 * @param {*} bol This is helpfull for both adding or deleting when the server is in process it's display the loading screen
 * @returns The message to be displayed
 *
 * Totally optional this is only for personal use
 */
export const loading = (bol) => {
  return {
    type: LOAD_ING,
    payload: bol,
  };
};

/**
 *
 * @returns Get the length of the Total Items
 *
 * Totally optional this is only for personal use
 */
export const getLength = () => (dispatch) => {
  axios.get("/api/items/length").then((res) => {
    dispatch({
      type: GET_LENGTH,
      payload: res.data,
    });
  });
};
