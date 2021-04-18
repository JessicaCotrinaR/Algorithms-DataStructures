function longestPalindromicSubstr(s) {
  if (s.length === 0) return "";
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let str1 = longest(s, i, i);
    let str2 = longest(s, i, i + 1);
    let longerPal = str1.length > str2.length ? str1 : str2;
    if (longerPal > longest) {
      longest = longerPal;
    }
  }
  return longest;
}

function longest(s, i, j) {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }
  return s.slice(i + 1, j);
}

/* "babad"
       ˆ
    //traversing the word
    let longest = ""
    i = 0
    //compare length between two strings
    let str1 = helper(s,i,i) //ba
    let str2 = helper(s,i,i+1)//b
    //slice the word
    longest = b
    //use a helper function to verify if the word is palindrom
    while(i>=0 && j< s.length && s[i]===s[j]){ // 1 >= 0 , 2<5 
        i-- //0
        j++//3
    }
    s.lice(i+1, j) // 0,2 //b
*/
