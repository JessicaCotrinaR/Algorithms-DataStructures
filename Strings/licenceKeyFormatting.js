function licenseKeyFormatting(S, K) {
  S = S.split("-").join("").toUpperCase();
  console.log(S);
  let strArray = S.split("");
  for (var i = strArray.length - 1 - K; i >= 0; i -= K) {
    strArray[i] = strArray[i] + "-"; //Only need to set the nth data：array[i] = array[i] + '-';
    console.log(strArray[i]);
  }
  return strArray.join("");
}
let S = "5F3Z-2e-9-w",
  K = 4;
console.log(licenseKeyFormatting(S, K));
