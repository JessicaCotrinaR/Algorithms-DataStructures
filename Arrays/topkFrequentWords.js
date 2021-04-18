function getShortestUniqueSubstring(arr, str) {
  // your code goes here
  let boundaries = [-Infinity, Infinity];
  let map = new Map();
  let unique = 0;
  // n = length of array
  for (let char of arr) {
    if (!map.has(char)) {
      unique++;
      map.set(char, 0);
    }
    map.set(char, map.get(char) + 1);
  }
  let l = 0,
    r = 0;
  // m = length of string
  while (r < str.length) {
    if (map.has(str[r])) {
      map.set(str[r], map.get(str[r]) - 1);
      if (map.get(str[r]) === 0) unique--;
    }
    while (unique === 0) {
      if (r - l < boundaries[1] - boundaries[0]) {
        boundaries[0] = l;
        boundaries[1] = r;
      }
      if (map.has(str[l])) {
        map.set(str[l], map.get(str[l]) + 1);
        if (map.get(str[l]) > 0) unique++;
      }
      l++;
    }
    r++;
  }
  if (boundaries[0] === -Infinity) return "";
  let result = str.slice(boundaries[0], boundaries[1] + 1);
  return result;
}

// Time O(n + m) | O(n) space
/*
  
  
  
  */
