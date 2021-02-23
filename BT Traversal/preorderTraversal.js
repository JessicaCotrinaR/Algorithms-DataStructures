//iterative
var preorderTraversal = function (root) {
  let answer = [];
  if (!root) {
    return answer;
  }
  var stack = [root];
  while (stack.length) {
    var node = stack.pop();
    answer.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return answer;
};

//recursive
var preorderTraversal = function (root) {
  let data = [];
  if (!root) {
    return data;
  }
  function traverse(node) {
    data.push(node.val);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return data;
};
