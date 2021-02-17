function intersectionTwoLinkedList(headA, headB) {
  if (headA === null || headB === null) return null;
  pointerA = headA;
  pointerB = headB;

  while (pointerA !== pointerB) {
    if (pointerA == null) {
      pointerA = headB;
    } else {
      pointerA = pointerA.next;
    }
    if (pointerB == null) {
      pointerB = headA;
    } else {
      pointerB = pointerB.next;
    }
  }
  return pointerA;
}
