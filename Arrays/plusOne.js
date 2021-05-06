function plusOne(digits) {
  let oneInMind = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    const digit = digits[i];

    if (i !== digits.length - 1 && !oneInMind) break;

    if (digit === 9) {
      oneInMind = true;
      digits[i] = 0;
    } else {
      digits[i]++;
      oneInMind = false;
    }
  }

  if (oneInMind) digits.unshift(1);

  return digits;
}
console.log(plusOne([9, 9, 9, 9]));
