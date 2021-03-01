// aabbc = a2b2c
function stringCompression(str) {
  let compString = "";
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    let currentcount = 1;
    while (str[i + 1] === currentLetter) {
      currentcount++;
      i++;
    }
    compString += currentLetter + currentcount;
    if (compString.length > str.length) return compString;
  }
  return compString;
}
let a = "a";
let b = 2;
//console.log(a + b);
console.log(stringCompression(["a", "a", "b", "b", "c"])); //[a,1,0] 3
["a", "2", "b", "2", "c", "3"][("a", "2", "b", "2", "c", "3")];
