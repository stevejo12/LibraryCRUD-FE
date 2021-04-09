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
