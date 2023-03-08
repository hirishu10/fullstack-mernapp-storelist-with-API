import { CREATE_ACCOUNT, LOGIN_ACCOUNT } from "./types";
import axios from "axios";

/**
 *
 * @param {*} name String - Provide name for new account
 * @param {*} email String - Provide unique email for new account
 * @param {*} password String - Provide password for new account
 * @returns Return the data with the token fetch from the database using api
 */
export const registerAccount = (name, email, password) => (dispatch) => {
  axios
    .post(
      "https://rishuapi.vercel.app/api/mernstore/user/add",
      JSON.stringify({ name, email, password }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      dispatch({
        type: CREATE_ACCOUNT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
};

/**
 *
 * @param {*} email String - Provide your email for login
 * @param {*} password String - Provide your password for login
 * @returns Return the data with the token fetch from the database using api
 */
export const loginAccount = (email, password) => (dispatch) => {
  axios
    .post(
      "https://rishuapi.vercel.app/api/mernstore/auth",
      JSON.stringify({ email, password }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      // console.log("res", res);
      dispatch({
        type: LOGIN_ACCOUNT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
};
