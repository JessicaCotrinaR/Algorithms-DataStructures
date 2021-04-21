/*
    nam t amt cit  nam  t amount cit
  ["alice,20,800,mtv","alice,50,100,beijing"]
  amt > 1000 invalid
  20 - 50 = 30 <= 60 && city are equals isInvalid
           time city
  alice: [{20, mtv},{50, bejing}]
*/
function invalidTransactions(transactions) {
  let answ = [];
  let map = {};
  //traverse for each transaction
  for (let trans of transactions) {
    let [name, time, amount, city] = trans.split(",");
    if (map[name]) {
      map[name].push({ time, city });
    } else {
      map[name] = [{ time, city }];
    }
  }
  //traverse again to verify if is an invalidTransaction
  for (let trans of transactions) {
    if (isInvalid(trans, map)) {
      answ.push(trans);
    }
  }
  return answ;
}
function isInvalid(transaction, map) {
  let [name, time, amount, city] = transaction.split(",");
  if (amount > 1000) return true;
  const prevTransaction = map[name];
  //to verify if within the time is <=60 and the name of city are different
  for (let trans of prevTransaction) {
    if (city !== trans.city && Math.abs(time - trans.time) <= 60) return true;
  }
  return false;
}
