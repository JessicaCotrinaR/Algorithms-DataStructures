class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function validateBST(tree) {
  return helperValidate(tree, -Infinity, Infinity);
}

function helperValidate(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value < minValue || tree.value >= maxValue) return false;
  const leftValid = helperValidate(tree.left, minValue, tree.value);
  return leftValid && helperValidate(tree.right, tree.value, maxValue);
}
