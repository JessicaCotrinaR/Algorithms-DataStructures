twoCitySchedCost = function (costs) {
  //sort descending order to have the biggest costs first
  costs.sort((a, b) => {
    return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
  });

  let npeople = costs.length / 2; // number people to send each city
  let countA = 0;
  let countB = 0;
  let sum = 0;
  for (let i = 0; i < costs.length; i++) {
    let costCityA = costs[i][0];
    let costCityB = costs[i][1];
    if (costCityA <= costCityB) {
      if (countA < npeople) {
        sum += costCityA;
        countA++;
      } else {
        sum += costCityB;
        countB++;
      }
    } else {
      // how many peopple is there
      if (countB < npeople) {
        sum += costCityB;
        countB++;
      } else {
        sum += costCityA;
        countA++;
      }
    }
  }

  return sum;
};
console.log("a".repeat(2));
