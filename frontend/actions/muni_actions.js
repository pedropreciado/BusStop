import * as MuniUtil from "../util/muni_util";

export const RECEIVE_ALL_MUNI_LINES = "RECEIVE_ALL_MUNI_LINES";
export const RECEIVE_MUNI_LINE = "RECIEVE_MUNI_LINE";
export const RECEIVE_ALL_MUNI_STOPS = "RECEIVE_ALL_MUNI_STOPS";
export const RECEIVE_MUNI_STOP = "RECEIVE_MUNI_STOP";
export const RECEIVE_MUNI_PREDICTIONS = "RECEIVE_MUNI_PREDICTIONS";

export const fetchLines = () => dispatch => (
  MuniUtil.fetchLines().then((lines) => dispatch(receiveAllMuniLines(lines)))
)

export const fetchLine = (id) => dispatch => (
  MuniUtil.fetchLine(id).then((line) => dispatch(receiveMuniLine(line)))
)

export const fetchStops = () => dispatch => (
  MuniUtil.fetchStops().then((stops) => dispatch(receiveAllMuniStops(stops)))
)

export const fetchStop = (id) => dispatch => (
  MuniUtil.fetchStops(id).then((stop) => dispatch(receiveMuniStop(stop)))
)

export const fetchPredictionsAtStop = (id) => dispatch => (
  MuniUtil.fetchPredictionsAtStop(id).then((predictions) => dispatch(receiveMuniPredictions(predictions)))
)

const receiveAllLines = lines => ({
  type: RECEIVE_ALL_MUNI_LINES,
  lines
})

const receiveMuniLine = line => ({
  type: RECEIVE_MUNI_LINE,
  line
})

const receiveAllMuniStops = stops => ({
  type: RECEIVE_ALL_MUNI_STOPS,
  stops
})

const receiveMuniStop = stop => ({
  type: RECEIVE_MUNI_STOP,
  stop
})

const receiveMuniPredictions = predictions => ({
  type: RECEIVE_MUNI_PREDICTIONS,
  predictions
})
