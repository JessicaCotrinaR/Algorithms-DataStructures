// input:
arr = [
  "p",
  "e",
  "r",
  "f",
  "e",
  "c",
  "t",
  "  ",
  "m",
  "a",
  "k",
  "e",
  "s",
  "  ",
  "p",
  "r",
  "a",
  "c",
  "t",
  "i",
  "c",
  "e",
];

// output:
// [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
// 'm', 'a', 'k', 'e', 's', '  ',
// 'p', 'e', 'r', 'f', 'e', 'c', 't' ]

function reverseWords(arr) {
  let n = arr.length;
  //helperfunction
  mirrorReverse(arr, 0, n - 1);
  // reverse each word:
  let wordStart = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      if (wordStart !== null) {
        mirrorReverse(arr, wordStart, i - 1);
        wordStart = null;
      }
    } else if (i === n - 1) {
      if (wordStart != null) {
        mirrorReverse(arr, wordStart, i);
      } else {
        if (wordStart === null) {
          wordStart = i;
        }
      }
    }
  }
  return arr;
}

function mirrorReverse(arr, start, end) {
  let temp = null;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
console.log(reverseWords(arr));
// let a = "";
// a += "b";
// a += "a";
// console.log(a);
