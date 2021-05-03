function uniqueEmailAddress(emails) {
  let set = new Set();
  for (let e of emails) {
    const at = e.indexOf("@");
    const name = e.slice(0, at);
    const domain = e.slice(at);
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
let emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];
console.log(uniqueEmailAddress(emails));
