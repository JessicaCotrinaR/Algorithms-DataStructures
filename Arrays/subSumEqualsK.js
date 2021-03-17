//nums = [1, 1, 1]), (k = 2);
function subSumEqualK(nums, k) {
  if (!nums.length) return 0;
  // the keys are going to be the cummulative sum, values are going to be the numbers of times that sum happened
  let obj = { 0: 1 };
  let curentsum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    curentsum += nums[i];
    console.log("currz", curentsum);
    if (obj[curentsum - k]) {
      count += obj[curentsum - k];
      console.log("çount", count);
    }
    obj[curentsum] = obj[curentsum] ? obj[curentsum] + 1 : 1;
  }
  console.log(obj);
  return count;
}
//console.log(subSumEqualK([1], 1));
//console.log(subSumEqualK([-1, -1, 1], 0));
console.log(subSumEqualK([1, 1, 2], 3));
