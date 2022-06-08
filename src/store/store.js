import { createStore } from 'redux'
import { reducer } from "./reducer.js";
let initialState = {
  number: 0,
};
export const store = createStore(reducer, initialState);
