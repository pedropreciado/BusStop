import {
  RECEIVE_ALL_MUNI_LINES,
  RECEIVE_MUNI_LINE,
  RECEIVE_ALL_MUNI_STOPS,
  RECEIVE_MUNI_STOP,
  RECEIVE_MUNI_PREDICTIONS
} from "../actions/muni_actions";
import merge from "lodash/merge";

const MuniReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MUNI_LINES:
      return merge({}, action.lines);
    case RECEIVE_MUNI_LINE:
      return merge({}, action.line);
    case RECEIVE_ALL_MUNI_STOPS:
      return merge({}, action.stops);
    case RECEIVE_MUNI_STOP:
      return merge({}, action.stop);
    case RECEIVE_MUNI_PREDICTIONS:
      return merge({}, action.predictions);
      default:
        return oldState;
  }
};

export default MuniReducer;
