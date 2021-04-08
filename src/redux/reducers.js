import { combineReducers } from "redux";

import user from "./modules/user";
import message from "./modules/message";

export default combineReducers({
  user,
  message,
});
