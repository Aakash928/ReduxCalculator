import React from "react";
import styles from "./styles.module.css";
import {useDispatch,useSelector} from "react-redux";
import {increment,decrement,add,substract,multiply,divide} from "../store/action.js";

const Calculator = () => {
 const dispatch= useDispatch();
 const state =useSelector((state=>state));

  return (
    <div>
      <h1>Calculator</h1>
      <div className={styles.main}>
        <div className={styles.inputbox}>{state.number}</div>
        <div className={styles.grid}>
          <button onClick={()=>dispatch(increment())}>increment</button>
          <button onClick={()=>dispatch(decrement())}>decrement</button>
          <button onClick={()=>dispatch(add(10))}>add by 10</button>
          <button onClick={()=>dispatch(multiply(5))}>multiply by 5</button>
          <button onClick={()=>dispatch(substract(15))}>substract by 15</button>
          <button onClick={()=>dispatch(divide(2))}>divide by 2</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
