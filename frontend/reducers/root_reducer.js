import { combineReducers } from "redux";
import MuniReducer from "./muni_reducer";

export default combineReducers({
  muni: MuniReducer
})
