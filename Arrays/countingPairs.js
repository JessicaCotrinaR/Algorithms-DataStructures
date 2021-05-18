function findPairs(nums, k) {
  if (k < 0) return 0;
  nums = k === 0 ? nums : Array.from(new Set(nums));
  console.log(nums);
  let map = new Map(),
    res = 0;
  for (let num of nums) {
    if (map.get(num + k) === 1) res++;
    if (num + k !== num - k && map.get(num - k) === 1) res++;
    //if none of the above conditions pass
    map.set(num, map.get(num) + 1 || 1);
    console.log(map);
  }
  return res;
}
let nums = [3, 1, 4, 1, 5],
  k = 2;
console.log(findPairs(nums, k));
/*
Input: nums = [3,1,4,1,5], k = 2
[ 3, 1, 4, 5 ]
           ˆ
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
3:1
1:1
4:1
5:1
2
*/
