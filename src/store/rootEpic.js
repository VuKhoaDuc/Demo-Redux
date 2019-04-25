import { combineEpics } from "redux-observable";
import _ from "lodash";
import { userEpics } from "./modules/usersDuck";

export default combineEpics(..._.values(userEpics));
