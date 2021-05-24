function myAtoi (str) {
  const abc = '0123456789';
  const MIN = -Math.pow(2, 31);
  const MAX = -MIN - 1;
  let result = '0';
  let isPositive = true;
  let checked = false;

  for (let candidate of str) {
    if (candidate === ' ' && !checked) {
      continue;
    }

    if (candidate === '+' && !checked) {
      isPositive = true;
      checked = true;
      continue;
    }

    if (candidate === '-' && !checked) {
      isPositive = false;
      checked = true;
      continue;
    }

    if (abc.indexOf(candidate) === -1) {
      break;
    }

    checked = true;
    result += candidate;
  }

  result = Number(result);

  if (isPositive) {
    if (result > MAX) {
      result = MAX;
    }
  } else {
    result > 0 ? result *= -1 : result;
    if (result < MIN) {
      result = MIN;
    }
  }

  return result;
}