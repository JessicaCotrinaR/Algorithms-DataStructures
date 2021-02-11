function findDuplicates(arr1, arr2) {
  // your code goes here
  let keysV = [];
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = 1;
  }
  //console.log(obj)
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      obj[arr2[i]]++;
    }
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value > 1) {
      keysV.push(Number(key));
    }
  }
  return keysV;
}

console.log(findDuplicates([1, 2, 3, 5, 6, 7], [3, 6, 7, 8, 20]));
