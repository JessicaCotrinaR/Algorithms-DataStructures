var isSymmetric = function (root) {
  return check(root, root);
};

function check(subTLeft, subRight) {
  if (subTLeft === null && subRight === null) {
    return true;
  }
  if (!subTLeft || !subRight || subTLeft.val !== subRight.val) {
    return false;
  }
  return (
    check(subTLeft.left, subRight.right) && check(subTLeft.right, subRight.left)
  );
}
