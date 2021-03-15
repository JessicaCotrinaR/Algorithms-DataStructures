function topKFrequentWords(words, k) {
  let hash = {};
  for (let word of words) {
    hash[word] = hash[word] + 1 || 1;
  }
  console.log(hash);
  //const counts = {};
  //words.forEach((word) => (hash[word] = (hash[word] || 0) + 1));
  console.log("pre", Object.keys(hash));
  let sortWords = Object.keys(hash).sort((a, b) => {
    let n = hash[b] - hash[a];
    if (n !== 0) {
      return n;
    } else {
      console.log("aaaaa", a);
      console.log("bb", b);
      return a > b ? 1 : -1;
    }
  });
  console.log(sortWords);
  return sortWords.slice(0, k);
}

console.log(
  topKFrequentWords(["i", "love", "leetcode", "i", "love", "coding"], 3)
);
