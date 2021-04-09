import AuthService from "./auth.service";
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from "../redux/modules/user/types";
import { SET_MESSAGE } from "../redux/modules/message/types";

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user: data.result },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = error.message || error.toString();

      dispatch({
        type: LOGIN_USER_FAILED,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
