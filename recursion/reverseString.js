function reverseString(str) {
  //to have two pointer
  let start = 0;
  let end = s.length - 1;
  while (start <= end) {
    const temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
}

console.log(reverseString("vaca"));
