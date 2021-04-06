import * as types from "./types";

const initialState = {
  loginUser: {
    result: {},
    error: null,
    loading: false,
    loaded: false,
  },
};

const ACTION_HANDLERS = {
  // login
  [types.LOGIN_USER]: (state) => {
    return {
      ...state,
      loginUser: {
        ...state.loginUser,
        error: null,
        loading: true,
        loaded: false,
      },
    };
  },
  [types.LOGIN_USER_SUCCESS]: (state, action) => {
    return {
      ...state,
      loginUser: {
        ...state.loginUser,
        error: action.result ? action.result : {},
        loading: false,
        loaded: true,
      },
    };
  },
  [types.LOGIN_USER_FAILED]: (state, action) => {
    return {
      ...state,
      loginUser: {
        ...state.loginUser,
        error: action.result ? action.result : {},
        loading: false,
        loaded: false,
      },
    };
  },
};
