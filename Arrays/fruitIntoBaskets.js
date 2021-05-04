function totalFruit(tree) {
  let left = 0;
  let currentLargest = -Infinity;
  let obj = {};
  for (let i = 0; i < tree.length; i++) {
    if (obj[tree[i]]) {
      obj[tree[i]] = obj[tree[i]] + 1;
    } else {
      obj[tree[i]] = 1;
    }
    console.log(obj);
    //keep update the obj until more than 2 elements in the continuous subarr
    while (Object.keys(obj).length > 2) {
      obj[tree[left]]--;
      if (obj[tree[left]] === 0) {
        delete obj[tree[left]];
      }
      left++;
    }
    currentLargest = Math.max(currentLargest, i - left + 1);
  }
  return currentLargest;
}

console.log(totalFruit([1, 2, 2, 3, 1]));
