function integerToRoman(num) {
  let roman = "";

  let ref = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let keys = Object.keys(ref);
  for (let k of keys) {
    let number = ref[k]; //1
    console.log(number);
    let val = Math.trunc(num / number); // 1 returns only number, not decimal.
    console.log(val);
    roman += k.repeat(val); //V
    num -= val * number; //1*1
  }

  return roman;
}

console.log(integerToRoman(6));
function integerToRoman(num) {
  let roman = "";
  let ref = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let keys = Object.keys(ref);
  for (let k of keys) {
    let number = ref[k];
    let val = Math.trunc(num / number); // returns only number, not decimal.
    roman += k.repeat(val); //2
    num -= val * number;
  }

  return roman;
}
