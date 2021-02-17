function linkedListCycleIdx(head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let intersection = slow;
      let start = head;

      while (intersection !== start) {
        start = start.next;
        intersection = intersection.next;
      }
      return start;
    }
  }

  return null;
}
