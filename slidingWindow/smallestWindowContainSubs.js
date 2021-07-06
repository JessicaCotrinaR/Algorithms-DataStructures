/*
Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"
Input: String="abdbca", Pattern="abc"
Output: "bca"
Explanation: The smallest substring having all characters of the pattern is "bca".
*/

function smallestContainSubstr(str, pattern) {
  let windowStart = 0,
    matches,
    frequency = {};
  for (let i = 0; i < pattern.length; i++) {
    if (!frequency[pattern[i]]) {
      frequency[pattern[i]] = 1;
    } else {
      frequency[pattern[i]]++;
    }
  }
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
      let rightChar = str[windowEnd]
      if(rightChar in frequency){
        frequency[rightChar]--
        if(frequency[rightChar] === 0){
            
        }
      }
  }
}

/*
squares = []
[-1,-2,0,1,2]
i
//get the square
temp = arr[i]*arr[i] //0
prev = 4

0

sqaures[0,1,4,0,0,0]
        
*/