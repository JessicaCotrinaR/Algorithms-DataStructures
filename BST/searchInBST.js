/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function searchInBST(root, val) {
  if (root.val === val) return root;
  let result = null;
  if (root.left) {
    result = searchInBST(root.left, val);
  }
  if (!result && root.right) {
    result = searchInBST(root.right, val);
  }
  return result;
}
