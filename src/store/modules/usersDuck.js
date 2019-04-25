
import {
    getDataUser
  } from "../../services/user-service";

 



// Selector
export const getUserDetail = (state, nickname) => {
  if (!nickname) return {};
  return state.user[nickname.toLowerCase()] || {};
};
export const checkIsFollowing = (state, nickname) =>
  getUserDetail(state, nickname).isFollowing || false;
export const getResultUserRecommendation = (state, nickname) => {
  const userDetail = getUserDetail(state, nickname);
  return {
    numberOfPositiveRecommendation: userDetail.numberOfPositiveRecommendation,
    numberOfRecommendation: userDetail.numberOfRecommendation,
    avgProfit: userDetail.avgProfit
  };
};
// Selector


// Action Creators

export const resetState = () => ({
  type: "RESET_STATE"
});

export const typeChangeInput = waiting => ({
  type: "CHANGE_INPUT",
  waiting
});

export const getDataBackend = nickname => ({
  type: "GET_DATA_BACKEND",
  nickname
});
export const getDataBackendSuccess = data => ({
  type: "GET_DATA_BACKEND_SUCCESS",
  data
});
export const getDataBackendFailure = data => ({
  type: "GET_DATA_BACKEND_FAILURE",
  data
});

// User Reducer
export const infor = (state = {}, action) => {
  switch (action.type) {
    case "RESET_STATE": {
      return {
        ...state,
        user: "Chờ nhập dữ liệu"
      };
    }
    case "GET_DATA_BACKEND_SUCCESS":
      console.log("mylog action in reducer: ", action);
      return {
        ...state,
        user: action.data,
        text: action.data.fullName,
        isSuccess: true
      };
    case "GET_DATA_BACKEND_FAILURE":
      console.log("mylog action fail in reducer: ", action);
      return {
        ...state,
        error: action.data.message,
        isHaveError: true
      };
    default:
      return state;
  }
};
// Epic Middleware
