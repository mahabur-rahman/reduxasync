import { user_request, user_success, user_failed } from "../types";

import axios from "axios";

// export const userList = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: user_request,
//       });

//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       console.log(res.data);

//       dispatch({
//         type: user_success,
//         payload: res.data,
//       });
//     } catch (error) {
//       dispatch({
//         type: user_failed,
//         payload: error.message,
//       });
//     }
//   };
// };

// another away ❤️

export const userList = () => {
  return (dispatch) => {
    dispatch({
      type: user_request,
    });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")

      .then((res) => {
        dispatch({
          type: user_success,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: user_failed,
          payload: err.message,
        });
      });
  };
};
