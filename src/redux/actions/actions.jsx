import { INCREMENT_VALUE, DECREMENT_VALUE } from "../types";

export const increment = (a) => {
  return {
    type: INCREMENT_VALUE,
    payload: a,
  };
};

export const decrement = (b) => {
  return {
    type: DECREMENT_VALUE,
    payload: b,
  };
};
