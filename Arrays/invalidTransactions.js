/**
 * @param {string[]} transactions
 * @return {string[]}
 transactions = 
 
 ["alice,20,800,mtv","alice,50,100,beijing"]
        
 
 ["alice,20,800,mtv","alice,50,100,beijing"]
 */
var invalidTransactions = function (transactions) {
  let invalid = [];
  let counter = 0;
  let time = 0;
  let city = "";
  for (let i = 0; i < transactions.length; i++) {
    let words = transactions[i].split(",");
    time += words[1];
    counter++;
    city += words[3];
    if (words[2] > 1000) {
      invalid.push(transactions[i]);
    } else if (counter !== 0) {
      if (time > 60) invalid.push(transactions[i - 1], transactions[i]);
    }
  }
  return invalid;
};
console.log(invalidTransactions(["alice,20,800,mtv", "alice,50,100,beijing"]));
