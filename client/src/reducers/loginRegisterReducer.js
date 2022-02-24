import { CREATE_ACCOUNT, LOGIN_ACCOUNT } from ".././actions/types";

/**
 * Providing Defaul Account for Login Account
 *
 * Email - mernstorelist.com
 *
 * Password - password
 */
const initialState = {
  details: {},
  token: "",
  currentUser: {},
  defaultAccountForEveryone: {
    email: "mernstorelist.com",
    password: "password",
  },
};

const loginRegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        ...state,
        details: action.payload,
        currentUser: action.payload?.user
          ? action.payload.user
          : state.currentUser,
        token: action.payload?.token ? action.payload.token : state.token,
      };
    case LOGIN_ACCOUNT:
      return {
        ...state,
        details: action.payload,
        currentUser: action.payload?.user
          ? action.payload.user
          : state.currentUser,
        token: action.payload?.token ? action.payload.token : state.token,
      };
    default:
      return state;
  }
};

export default loginRegisterReducer;
