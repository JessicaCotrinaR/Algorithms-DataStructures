function constructBTreePreInorder(preOrder, inOrder) {
  //currentNode
  helper(0, 0, Inorder.length - 1, preOrder, inOrder);
}
function helper(preStart, inStart, inEnd, preEnd) {
  if (preStart > preOrder.length - 1 || inStart > inEnd) return null;
  let root = new TreeNode(preOrder[preStart]);
  let inIndex = 0;
  for (let i = inStart; i <= inEnd; i++) {
    if (root.val === inOrder[i]) {
      inIndex = i;
    }
  }
  //set left ight nodes
  root.left = helper(preStart + 1, inIndex - 1, preOrder, inOrder);
  root.right = helper(
    preStart + inIndex - inStart + 1, // left subtrees traverse first
    inIndex + 1,
    inEnd,
    preOrder,
    inOrder
  );
  return root;
}
