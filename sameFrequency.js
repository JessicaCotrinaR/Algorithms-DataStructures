function findLongestSubstring(n1, n2) {
  num1S = String(n1);
  num2S = String(n2);
  if (num1S.length !== num2S.length) return false;
  for (let i = 0; i < num1S.length; i++) {
    if (!num2S.includes(num1S[i])) return false;
  }
  return true;
}
// console.log(findLongestSubstring(182, 681));

//1,2,3 false
//1,2,2 true
function areThereDuplicates(args) {
  // good luck. (supply any arguments you deem necessary.)

  argARR = Array(args);
  console.log(argARR);
  let obj = {};
  for (let i = 0; i < args.length; i++) {
    if (!obj[args[i]]) {
      obj[args[i]] = 1;
    } else {
      obj[args[i]]++;
    }
  }
  console.log(obj);
}

console.log(areThereDuplicates("a", "b", "c", "a"));

function maxSubarraySum(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < num) return null;
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));

function minSubArrayLen(arr, num) {
  if (arr.length < num) return null;
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(5));
let arr = [1, 2, 3, 4, 6, 8];
console.log(arr.slice(-1));
console.log(arr);

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}
// console.log(colletStrings(obj));

function searchStr(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log("j", j, short[j], "i+j", j, "i", i, long[i + j]);
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        console.log("found one");
        count++;
      }
    }
  }
  return count;
}

console.log(searchStr("lo lo ", "lo"));

arr = [2, 1, 9, 76, 4];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    console.log(currentVal);
    let j = i - 1;
    console.log("arrj", arr[j]);
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort(arr));
