var generate = function (numRows) {
  let answer = [];
  if (numRows === 0) return answer;
  answer.push([1]); //one Element;
  //populate each row
  for (let i = 1; i < numRows; i++) {
    let prev = answer[i - 1]; //1
    let innerArr = [];
    innerArr.push(1);
    console.log("first", innerArr);
    for (let j = 1; j < prev.length; j++) {
      innerArr.push(prev[j - 1] + prev[j]);
    }
    innerArr.push(1);
    console.log("dos", innerArr);
    answer.push(innerArr);
  }
  return answer;
};

console.log(generate(3));
