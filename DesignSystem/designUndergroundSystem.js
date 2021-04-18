//Design underground system
var undergroundSystem = function () {
  this.clients = new Map();
  this.stations = new Map();
};
undergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.clients.set(id, [stationName, t]);
};
undergroundSystem.prototype.checkOut = function (id, stationName, t) {
  //get the client
  let infoClient = this.clients.get(id);
  let stationsName = infoClient[0] + "-" + stationName;
  let totalTime = infoClient[1] - t;
  if (this.stations.has(stationsName)) {
    let newTotaltime = totalTime + this.get(stationsName[0]);
    let totalClients = ++this.stations.get(stationsName)[1];
    this.stations.set(stationsName, [newTotaltime, totalClients]);
  } else {
    this.stations.set(stationsName, totalTime, 1);
  }
};
undergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  let stationsNam = startStation + "-" + endStation;
  let values = this.stations.get(stationsNam);
  return values[0] / values[1];
};
