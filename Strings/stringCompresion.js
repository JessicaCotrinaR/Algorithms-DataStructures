// aabbc = a2b2c
function stringCompression(chars) {
  let compString = [];
  for (let i = 0; i < chars.length; i++) {
    let currentLetter = chars[i];
    let currentcount = 1;
    while (chars[i + 1] === currentLetter) {
      currentcount++;
      i++;
    }
    compString.push(currentLetter);
    compString.push(currentcount);
    if (compString.length > chars.length) return compString.length;
  }
  return compString.length;
}
//let a = "a";
let b = 2;
//console.log(a + b);
console.log(stringCompression(["a", "a", "b", "b", "c", "c", "c"]));
//let a = "ana";
//console.log(a.split(""));
