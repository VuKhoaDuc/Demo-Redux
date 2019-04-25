// import {
//     getDataUser
//   } from "../../services/user-service";

export const types = {
  RESET_STATE: "RESET_STATE"
};
// Selector

// Action Creators
export const actions = {
  resetState: payload => ({
    type: types.RESET_STATE,
    payload
  })
};

// export const resetState = () => ({
//   type: "RESET_STATE"
// });

// export const typeChangeInput = waiting => ({
//   type: "CHANGE_INPUT",
//   waiting
// });

// export const getDataBackend = nickname => ({
//   type: "GET_DATA_BACKEND",
//   nickname
// });
// export const getDataBackendSuccess = data => ({
//   type: "GET_DATA_BACKEND_SUCCESS",
//   data
// });
// export const getDataBackendFailure = data => ({
//   type: "GET_DATA_BACKEND_FAILURE",
//   data
// });

// User Reducer
export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "RESET_STATE": {
      return {
        ...state,
        user: "Chờ nhập dữ liệu"
      };
    }
    // case "GET_DATA_BACKEND_SUCCESS":
    //   console.log("mylog action in reducer: ", action);
    //   return {
    //     ...state,
    //     user: action.data,
    //     text: action.data.fullName,
    //     isSuccess: true
    //   };
    // case "GET_DATA_BACKEND_FAILURE":
    //   console.log("mylog action fail in reducer: ", action);
    //   return {
    //     ...state,
    //     error: action.data.message,
    //     isHaveError: true
    //   };
    default:
      return state;
  }
};
// Epic Middleware

// const resetStateEpic = (action$, store) =>
//   action$.ofType(types.RESET_STATE).switchMap(
//     action =>
//       new Promise(resolve => {
//         resolve({ ahihi: "OK" });
//       })
//   );

export const userEpics = {};
