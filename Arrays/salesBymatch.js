function sockMerchant(n, ar) {
  let counter = 0;
  let obj = {};

  for (let i = 0; i < n; i++) {
    if (!obj[ar[i]]) {
      obj[ar[i]] = 1;
    } else {
      obj[ar[i]]++;
    }
  }
  let values = Object.values(obj); // [4, 1, 5]
  console.log(values);
  for (let i = 0; i < values.length; i++) {
    let number = values[i];
    if (number % 2 === 0 && number !== 1) {
      counter += number / 2;
    } else {
      if ((number - 1) % 2 === 0 && number !== 1) {
        counter += Math.floor(number / 2);
        console.log(counter);
      }
    }
  }
  return Math.floor(counter);
}

console.log(sockMerchant(15, [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]));
