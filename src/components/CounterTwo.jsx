import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/actions/actions";

const CounterTwo = () => {
  const count = useSelector((state) => state.counterReducer.count);

  const dispatch = useDispatch();

  return (
    <>
      <h1>CounterTwo Of Redux 👍</h1>
      <h1>Number of Counts - {count} </h1>
      <div className="btnDiv">
        <button type="button" onClick={() => dispatch(increment(100))}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrement(10))}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default CounterTwo;
