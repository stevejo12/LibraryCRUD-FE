import * as types from "./types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLoggedIn: user ? true : false,
  user: user ? user : null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case types.LOGIN_USER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case types.REGISTER_USER_FAILED:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
