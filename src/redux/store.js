import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

// could add preloadedState to initialize store value of redux data

export default store;
