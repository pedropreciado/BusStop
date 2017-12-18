import * as MuniUtil from "../util/muni_util";

export const RECEIVE_ALL_MUNI_LINES = "RECEIVE_ALL_MUNI_LINES";
export const RECEIVE_MUNI_LINE = "RECIEVE_MUNI_LINE";
export const RECEIVE_MUNI_STOPS = "RECEIVE_MUNI_STOPS";
export const RECEIEVE_MUNI_STOP = "RECEIVE_MUNI_STOP";
export const RECEIVE_MUNI_PREDICTIONS = "RECEIVE_MUNI_PREDICTIONS";

export const fetchLines = () => dispatch => (
  MuniUtil.fetchLines().then((lines) => dispatch(receiveAllLines(lines)))
)

export const fetchLine = (id) => dispatch => (
  MuniUtil.fetchLine(id).then((line) => dispatch(receiveLine(line)))
)

export const fetchStops = () => dispatch => (
  MuniUtil.fetchStops().then((stops) => dispatch(receiveAllStops(stops)))
)

export const fetchStop = (id) => dispatch =. (
  MuniUtil.fetchStops(id).then((stop) => dispatch(receiveStop(stop)))
)
