//11,12,13,22,21,23,31,32,33=>
function sum(arr) {
  let sum = 0;
  console.log(a.split(",").join(""));
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      sum += Number(String(arr[i]) + String(arr[j]));
    }
  }
  return sum;
}

b = [1, 2, 3];
a = String(b).split(",").join("");
console.log(a);
