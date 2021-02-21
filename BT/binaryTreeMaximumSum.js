/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function binaryTreeMaximumSum(root) {
  maxPathSum = -Infinity;
  pathSum(root);
  return maxPathSum;
}

function pathSum(node) {
  if (node === null) return 0;
  let left = Math.max(0, pathSum(node.left));
  let right = Math.max(0, pathSum(node.right));
  maxPathSum = Math.max.max(maxPathSum, left + right + node.val);
  return Math.max(left, right) + node.val;
}
