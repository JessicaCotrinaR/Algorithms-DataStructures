/*
Input: file = "abc", queries = [1,2,1]
Output: [1,2,0]
Explanation: The test case represents the following scenario:
File file("abc");
Solution sol;
sol.read(buf, 1); // After calling your read method, buf should contain "a". We read a total of 1 character from the file, so return 1.
sol.read(buf, 2); // Now buf should contain "bc". We read a total of 2 characters from the file, so return 2.
sol.read(buf, 1); 
// We have reached the end of file, no more characters can be read. So return 0.
Assume buf is allocated and guaranteed to have enough space for storing all characters from the file.
*/
function solution(read4) {
  const lastUnread = [];
  return function (buf, n) {
    while (buf.length < n && lastUnread.length > 0) {
      buf.push(lastUnread.shift());
    }
    while (buf.length < n) {
      const bufferfour = [];
      read4(bufferfour);
      if (bufferfour.length === 0) {
        break;
      }
      buf.push(...bufferfour);
    }
    //if we read too much
    while (buf.length > n) {
      lastUnread.unshift(buf.pop());
    }
    return buf.length;
  };
}
