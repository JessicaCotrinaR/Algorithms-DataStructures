function mergedArrays(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (second < 0) {
      break;
    }
    if (nums1[first] > nums2[second]) {
      nums1[i] = nums1[first];
      first--;
    } else {
      nums1[i] = nums2[second];
      second--;
    }
  }
}
let nums1 = [1, 2, 3, 0, 0, 0];
//               5           2
//f =1 i=4
// console.log(nums1.splice(3, 3));
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
console.log(mergedArrays(nums1, m, nums2, n));
console.log(nums1);
