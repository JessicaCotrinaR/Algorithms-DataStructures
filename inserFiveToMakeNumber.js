/*/suposse we have a number n. we have to find the maximun number. we can make it by inseting 5
//anywhere
input n = 826 ouput 8526
*/

function insertFive(n) {
  let temp = String(n);
  let answer = -Infinity;
  for (let i = 0; i < temp.length; i++) {
    let cand = temp.slice(0, i) + "5" + temp.slice(i);
    if (i === 0 && temp[0] === "-") {
      continue;
    }
    answer = Math.max(answer, cand);
  }
  return answer;
}
console.log(insertFive(560));
