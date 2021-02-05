//[1,1,1,1,1,2,2,2,3,3,3,3,4,4,5]

function deleteDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    if (nums[i] === nums[j]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
}

//better option
function deleteDuplicates2(nums) {
  if (nums === null) return 0;
  //use two pointers to remove the duplicates in place
  let writePointer = 1;
  for (let i = 1; i < nums.length; i++) {
    //if the element we're reading is different to the previous
    if (nums[i] !== nums[i - 1]) {
      nums[writePointer] = nums[i];
      writePointer++;
    }
  }
  return writePointer;
}

console.log(deleteDuplicates2([1, 1, 2]));
