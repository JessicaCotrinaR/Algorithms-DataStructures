function uniqueEmailAddress(emails) {
  let set = new Set();
  for (let e of emails) {
    console.log(e);
    const at = e.indexOf("@"); // get the index where @ is located for each e
    console.log(at);
    const name = e.slice(0, at); // slice from 0 to index at at -1
    const domain = e.slice(at); // slice from the at forward
    let str = "";
    for (let n of name) {
      if (n === ".") continue;
      if (n === "+") break;
      str += n;
    }
    set.add(str + domain);
  }
  return set.size;
}
//Time = O(n*m)
//Space: O(n)
let emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];
console.log(uniqueEmailAddress(emails));
