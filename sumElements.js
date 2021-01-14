function charCount(str) {
  //make an object to return at the end
  let result = {};
  //loop over the string
  //for (let i = 0; i < str.length; i++) {
  for (let char of str) {
    //if the character is a number or letter inside of the object add 1
    if (result[char] > 0) {
      result[char]++;
    }
    //if the character is a number and it is not in the obkect set value to1
    else {
      result[char] = 1;
    }
  }
  return result;
}

// console.log(charCount("hello"));

// Problem [1,2,3], [1,4,9] true

function same(arr1, arr2) {
  //base case
  if (arr1.length !== arr2.length) {
    return false;
  }
  //   loop over the first arr
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    //remove one index
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}
// let arr1 = [1, 2, 3];
let arr2 = [4, 1, 9];
arr2.splice(1, 1);
// console.log(same(arr1, arr2));

console.log(arr2);

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  //aaz
  //aza
  //{a:1,a:1,z:1}
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("rat", "car"));

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let counter = 0;
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[j]) {
      j++;
      console.log("in if", counter);
    } else {
      j++;
      counter++;
      console.log("in else", counter);
    }
  }
  console.log(counter);
  return counter;
}

console.log(countUniqueValues([1, 1]));

function maxSum(arr, num) {
  let sum = 0;
  let temp = 0;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  temp = sum;
  for (let j = num; j < arr.length; j++) {
    temp = temp - arr[j - num] + arr[j];
    sum = Math.max(sum, temp);
  }
  return sum;
}

console.log(maxSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
