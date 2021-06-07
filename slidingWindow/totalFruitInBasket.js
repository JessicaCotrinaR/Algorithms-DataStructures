function totalFruits(fruits) {
  let windowStart = 0,
    maxNumOfFruits = {};
  maxLength = 0;
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    if (!maxNumOfFruits[fruits[windowEnd]]) {
      maxNumOfFruits[fruits[windowEnd]] = 1;
    } else {
      maxNumOfFruits[fruits[windowEnd]]++;
    }
    console.log(maxNumOfFruits);
    while (Object.keys(maxNumOfFruits).length > 2) {
      let fruitToDelete = fruits[windowStart];
      maxNumOfFruits[fruitToDelete] -= 1;
      if (maxNumOfFruits[fruitToDelete] === 0) {
        delete maxNumOfFruits[fruitToDelete];
      }
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

let fruits = ["A", "B", "C", "A", "C"];
console.log(totalFruits(fruits));
