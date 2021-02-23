// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function removeDuplicatesfromLinkedList(linkedList) {
  let current = linkedList;
  while (current !== null) {
    let newNode = current.next;
    while (newNode !== null && newNode.value === current.value) {
      newNode = newNode.next;
    }
    current.next = newNode;
    current = newNode;
  }
  return linkedList;
}
