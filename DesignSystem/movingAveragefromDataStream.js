//Moving average from data Stream
var movingAverage = function (size) {
  this.size = size;
  this.values = [];
  this.sum = 0;
};

movingAverage.prototype.next = function (val) {
  this.values.push(val);
  this.sum += val;
  if (this.values.length > this.size) {
    const first = this.values.shift();
    this.sum -= first;
  }
  return this.sum / this.values.length;
};
