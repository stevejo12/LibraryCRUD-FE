import * as types from "./types";

export const loginAction = (data) => ({
  types: [types.LOGIN_USER, types.LOGIN_USER_SUCCESS, types.LOGIN_USER_FAILED],
  promise: (services) =>
    services.user
      .login(data)
      .then((res) => res)
      .catch((err) => err),
});
