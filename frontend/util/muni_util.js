// Mission and Powers stopCode: 17841
let APIKey = "d90713e6-a4b5-4799-a6cd-fb74f3be460b";

export const fetchLines = () => {
  return $.ajax({
    "method": "GET",
    "url": `http://api.511.org/transit/lines?api_key=${APIKey}&operator_id=SF`
  })
}

export const fetchLine = (id) => {
  return $.ajax({
    "method": "GET",
    "url": `http://api.511.org/transit/lines?api_key=${APIKey}&operator_id=SF&Line_id=${id}`
  })
}

export const fetchStops = () => {
  return $.ajax({
    "method": "GET",
    "url": `http://api.511.org/transit/stops?api_key=${APIKey}&operator_id=SF`
  })
}

export const fetchStop = () => {
  return $.ajax({
    "method": "GET",
    "url":
  })
}

export const fetchPredictionsAtStop = (id) => {
  return $.ajax({
    "method": "GET",
    "url": `http://api.511.org/transit/StopMonitoring?api_key=${APIKey}&agency=SF&stopCode=${id}`
  })
}
