/*
Shortest Word Edit Path
Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.

Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.


If the task is impossible, return -1
source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions

hit

hot
lot log
*/

function wordLadder(source, target, wordList) {
  let queue = [source];
  let step = 1;
  while (queue.length) {
    // loop for the previous level nodes
    let next = []; // candidates for the next level
    console.log("NEXT--------------->", next);
    for (let word of queue) {
      //bit
      // check each node from previous level
      for (let i = 0; i < word.length; i++) {
        //3
        let temp = word.substr(0, i) + word.substr(i + 1); // patten where 1 char is different
        console.log("TEMPP", temp);
        for (let j = 0; j < wordList.length; j++) {
          //put
          // compare with the wordList
          let check = wordList[j].substr(0, i) + wordList[j].substr(i + 1);
          ["but", "put", "big", "pot", "pog", "dog", "lot"];
          console.log("CHECK ==>", check);
          if (temp == check) {
            // if patten checks out...
            if (wordList[j] == target) return step + 1; // bingo!
            next.push(wordList[j]);
            wordList = wordList.slice(0, j).concat(wordList.slice(j + 1));
            j--;
          }
        }
      }
    }
    queue = next;
    step++;
  }
  return 0;
}

console.log(
  wordLadder("bit", "dog", ["but", "put", "big", "pot", "pog", "dog", "lot"])
);
