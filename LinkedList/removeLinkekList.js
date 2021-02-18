function removeLinkedList(head, val) {
  while (head !== null && head.val === val) {
    head = head.next;
  }
  let currentNode = head;
  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.next.val === val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
}
