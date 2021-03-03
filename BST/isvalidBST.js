function isValidBST(root) {
  return isValid(root.val, -Infinity, Infinity);
}
function isValid(root, min, max) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  else {
    return (
      isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
    );
  }
}
