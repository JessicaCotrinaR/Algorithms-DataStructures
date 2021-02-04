/*
decode ways. a letter can be encoded to a number 
"A"-> 1
"B"-> 2
"C" -> 3
...
input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'.
*/
function decodeVaritions(s) {
  if (!s) return 0;
  if (s[0] === "0") return 0;
  let len = s.length;
  let dp = new Array(len + 1);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < len + 1; i++) {
    if (s[i - 1] === "0") {
      // when we encounters an 0 in str, check if it is valid
      if (s[i - 2] === "1" || s[i - 2] === "2") {
        // valid case, the last two digits has only 1 way of decoding
        dp[i] = dp[i - 2];
      } else {
        // invalid case, the input str can't be decoded
        return 0;
      }
    } else {
      console.log("IIII", i);
      if (s.slice(i - 2, i) <= 26 && s.slice(i - 2, i) > 10) {
        console.log(",DIMEEE", s.slice(i - 2, i));
        // the last two digits have 2 ways of decoding eg:"13" : "13" or "1" "3"
        dp[i] = dp[i - 2] + dp[i - 1];
        console.log("DP", dp[i]);
      } else {
        // the last two digits only have 1 way of decoding eg: "37" can be only interpreted as "3" and "7", "09": "0"must follow previous digit and we can only decode it to "9"
        dp[i] = dp[i - 1];
      }
    }
  }

  return dp[len];
}
console.log(decodeVaritions("1739"));
