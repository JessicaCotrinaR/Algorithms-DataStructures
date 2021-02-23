function findMaximumDepth(root, depth) {
  let answer = 0;
  if (root === null) return;
  maxim(root, 0);
  return answer + 1;
}

function maxim(root, depth) {
  if (!root.left && !root.right) {
    answer = Math.max(answer, depth);
  }
  findMaximumDepth(root.left, depth + 1);
  findMaximumDepth(root.right, depth + 1);
}
