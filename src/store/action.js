import {
    INCREMENT,
    DECREMENT,
    ADD,
    SUBSTRACT,
    DIVIDE,
    MULTIPLY,
  } from "./action.type";
  export const increment = () => ({ type: INCREMENT });
  export const decrement = () => ({ type: DECREMENT });
  export const add = (value) => ({ type: ADD ,payload:value});
  export const substract = (value) => ({ type: SUBSTRACT ,payload:value});
  export const divide = (value) => ({ type: DIVIDE,payload:value });
  export const multiply = (value) => ({ type: MULTIPLY,payload:value });
  