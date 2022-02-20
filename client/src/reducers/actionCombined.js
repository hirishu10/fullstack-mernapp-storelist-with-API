import {
  GET_NAMES,
  ADD_NAME,
  DELETE_NAME,
  LOAD_ING,
  GET_LENGTH,
} from "../actions/types";
const initialState = {
  items: [],
  loading: true,
  length: 0,
};

const actionCombined = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAMES:
      return { ...state, items: action.payload };
    case ADD_NAME:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case DELETE_NAME:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case LOAD_ING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_LENGTH:
      return {
        ...state,
        length: action.payload,
      };
    default:
      return state;
  }
};

export default actionCombined;

// some random data for testing purposes
// { id: 12, name: "Chicken" },
// { id: 13, name: "Mutton" },
// { id: 11, name: "Eggs" },
// { id: 5, name: "Cabbage" },
// { id: 3, name: "Tandori Nan" },
