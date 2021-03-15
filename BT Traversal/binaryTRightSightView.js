function binaryTRightView(root) {
  if (root.val === null) return null;
  if (root.left === null && root.right === null) return null;
  let answ = [];
  dfs(root, 0, answ);
  return answ;
}
function dfs(root, len, answ) {
  if (root.val === null) return;
  if (answ.length === len) {
    answ.push(root.val);
  }
  dfs(root.right, len + 1, answ);
  dfs(root.left, len + 1, answ);
}
let a = 1;
let b = 2;
let c = 4;
console.log((a = b = c));
