import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";

const store = createStore(rootReducer);

export const getDisplay = (store) => store.currVal;

export default store;
