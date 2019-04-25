import { combineReducers } from "redux";
import { userReducer } from "./modules/usersDuck";

const appReducer = combineReducers({
  user: userReducer
});

export default function createReducer(state, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }

  return appReducer(newState, action);
}
