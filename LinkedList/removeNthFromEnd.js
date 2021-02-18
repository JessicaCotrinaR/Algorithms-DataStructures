function removeNthFromEnd(head, n) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let slow = dummyHead;
  let fast = dummyHead;
  for (let i = 1; i <= n + 1; i++) {
    fast = fast.next;
  }
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
}
