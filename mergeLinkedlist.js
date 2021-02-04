/* the linked list are sorted
2-> 6 ->7->8
1->3->4->5->9->10
output: 1->2->3->4->5->6->7->8->9->10
*/
class LinkedList {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}
function mergeLinkedList(headOne, headTwo) {
  p1 = headOne;
  p1Prev = null;
  p2 = headTwo;
  while (p1 !== null && p2 !== null) {
    //keep moving forward
    if (p1.value < p2.value) {
      p1Prev = p1;
      p1 = p1.next;
    } else {
      if (p1Prev !== null) {
        p1Prev.next = p2;
      }
      p1Prev = p2;
      p2 = p2.next;
      p1Prev.next = p1;
    }
  }
  if (p1 === null) {
    p1Prev.next = p2;
  }
  return headOne.value < headTwo.value ? headOne : headTwo;
}
//Time Complexity = O(n+m) n = length first linked list, m second linked list
//Space = 0(1)

console.log(mergeLinkedList(headOne, headTwo));
