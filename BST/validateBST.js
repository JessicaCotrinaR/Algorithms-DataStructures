class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
var isValidBST = function (root) {
  return isValid(root, -Infinity, Infinity);
};
const isValid = (root, low, high) => {
  if (!root) {
    return true;
  }
  if (root.val <= low || root.val >= high) {
    return false;
  }
  return (
    isValid(root.left, low, root.val) && isValid(root.right, root.val, high)
  );
};
