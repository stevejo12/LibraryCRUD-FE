import * as types from "./types";
import AuthService from "../../../services/auth.service";
import { SET_MESSAGE } from "../message/types";

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: types.LOGIN_USER_SUCCESS,
        payload: { user: data.result },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = error.message || error.toString();

      dispatch({
        type: types.LOGIN_USER_FAILED,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const register = (username, password, email) => (dispatch) => {
  return AuthService.register(username, password, email).then(
    (res) => {
      dispatch({
        type: types.REGISTER_USER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: res.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.toString();

      dispatch({
        type: types.REGISTER_USER_FAILED,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
