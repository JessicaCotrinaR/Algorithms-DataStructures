function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(-1);
  let current = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;
    if (l1) {
      sum += l1;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    current.next = new ListNode(sum);
    current = current.next;
  }
  return dummyHead.next;
}
