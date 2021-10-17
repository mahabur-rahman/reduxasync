import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions/actions";

const Counter = ({ increment, decrement, count }) => {
  return (
    <>
      <h1>Counter Of Redux 👍</h1>
      <h1>Number of Counts - {count}</h1>
      <div className="btnDiv">
        <button type="button" onClick={() => increment(5)}>
          Increment
        </button>
        <button type="button" onClick={() => decrement(2)}>
          Decrement
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ count: state.counterReducer.count });

export default connect(mapStateToProps, { increment, decrement })(Counter);
