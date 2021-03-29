function stringCompression(chars) {
  let str = "";
  for (let i = 0; i < chars.length; i++) {
    let currentLetter = chars[i];
    let counter = 1;
    while (currentLetter === chars[i + 1]) {
      counter++;
      i++;
    }
    str += currentLetter + counter;
    if (str.length > chars.length) return str.split("");
  }
  return str.split("");
}
console.log(stringCompression(["a", "a", "b", "b", "c"]));
/*
[a,a,b,b,b,c] => a2b3c1

traverse the arr
get the first letter and say while is EQUAL to the next letter have a counter 
after don't find more equal 
set again counter 0 and concat the letter with the counter


*/
