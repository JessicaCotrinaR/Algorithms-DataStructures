//Design underground system
var undergroundSystem = function () {
  this.clients = new Map();
  this.stations = new Map();
};
undergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.clients.set(id, [stationName, t]);
};
undergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let startStationName = this.clients.get(id); // return [stationName, t]
  let stationKey = startStationName[0] + "-" + stationName;
  let startTime = startStationName[1];
  if (this.stations.has(stationKey)) {
    let totalTime = t - startTime + this.stations.get(stationKey)[0];
    let totalClients = ++this.stations.get(stationKey)[1];
    this.stations.set(stationKey, [totalTime, totalClients]);
  } else {
    this.stations.set(stationKey, [t - startTime, 1]);
  }
};
undergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  let stationsnewKey = startStation + "-" + endStation;
  let values = this.stations.get(stationsnewKey);
  return values[0] / values[1];
};
