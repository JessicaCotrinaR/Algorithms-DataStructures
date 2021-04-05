var reverse = function (x) {
  const sign = Math.sign(x);

  let rest = Math.abs(x);

  let reversed = 0;
  while (rest > 0) {
    // Gets the rightmost digit
    const rightmostDigit = rest % 10;

    // Moves the decimal to the left and floor cuts the right most digit off
    // This gets the next rightmost digit ready.
    rest = Math.floor(rest / 10);

    //Move the current digits to the left to make room for the rightmost digit.
    reversed *= 10;
    reversed += rightmostDigit;

    if (reversed > 2 ** 31) {
      return 0;
    }
  }
  return reversed * sign;
};

console.log(reverse(123));
