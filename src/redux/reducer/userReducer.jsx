import { user_request, user_success, user_failed } from "../types";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case user_request:
      return {
        ...state,
        loading: true,
      };

    case user_success:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case user_failed:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
