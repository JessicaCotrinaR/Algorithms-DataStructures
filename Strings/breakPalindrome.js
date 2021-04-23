function breakPalindrome(palindrome) {
  // edge case, if length 1, return empty string
  if (palindrome.length <= 1) return "";

  // making our palindrom an array bc easier to replace
  const palindromeArray = palindrome.split("");

  // loop until halfway
  let i = 0;

  // loop until halfway through string
  while (i < Math.floor(palindromeArray.length / 2)) {
    let letter = palindromeArray[i];

    // if we're looking at an non "a" - we're interested in finding the first non-"a" letter
    if (letter !== "a") {
      // replace that letter at the position with an "a"
      palindromeArray[i] = "a";

      // return a string of our arr where the first non-"a" is repalced with an "a"
      return palindromeArray.join("");
    }

    i++;
  }

  // edge case: palindrome of all "a"s, replace the very last "a" with a "b"
  palindromeArray[palindromeArray.length - 1] = "b";
  return palindromeArray.join("");
}
