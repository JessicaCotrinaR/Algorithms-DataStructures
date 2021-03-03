function flatten(root) {
  if (!root) return null;
  if (root.left === null && root.right === null) return root;
  let leftNode = root;
  while (leftNode.left !== null) {
    let head = leftNode;
    while (head !== null) {
      head.left.next = head.right;
      if (head.next !== null) {
        head.right.next = head.next.left;
      }
      head = head.next;
    }
    leftNode = leftNode.left;
  }
  return root;
}
