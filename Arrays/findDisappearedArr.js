function findDisappearedNumbers(nums) {
  let answer = [];
  let arr = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (!arr.has(i)) {
      answer.push(i);
    }
  }
  return answer;
}
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
