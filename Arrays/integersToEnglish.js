function integersToEnglish(num) {
  let ones = {
    0: "",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };
  let tens = {
    2: "Twenty",
    3: "Thirty",
    4: "Forty",
    5: "Fifty",
    6: "Sixty",
    7: "Seventy",
    8: "Eighty",
    9: "Ninety",
  };
  let lessThan20 = {
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
  };

  let comma = {
    0: "",
    1: "Thousand",
    2: "Million",
    3: "Billion",
  };

  if (num == 0) return "Zero";

  let output = "",
    commaCount = 0;
  while (num != 0) {
    let hs = "",
      ts = "",
      os = "",
      ks = ""; // hundreds, tens, ones, thousands
    let current = num % 1000;
    let hundredsNum = parseInt(current / 100);
    hs = ones[hundredsNum];
    hs = hs != "" ? hs + " Hundred " : "";
    tensNum = current % 100;
    if (tensNum > 9 && tensNum < 20) {
      ts = lessThan20[tensNum];
    } else if (tensNum <= 9) {
      os = ones[tensNum];
    } else {
      ts = tens[parseInt(tensNum / 10)];
      os = ones[tensNum % 10];
    }

    ts = ts == "" ? "" : ts + " ";
    os = os == "" ? "" : os + " ";

    let combo = hs + ts + os;
    if (combo != "") {
      ks = comma[commaCount];
      ks = ks == "" ? "" : ks + " ";
    }

    output = combo + ks + output;
    num = parseInt(num / 1000);
    commaCount++;
  }
  return output.trim();
}
console.log(integersToEnglish(1203));
