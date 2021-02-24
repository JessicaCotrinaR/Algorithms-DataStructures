/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function linkedListCycle(head) {
  if (head === null) return false;
  //two pointer fast, slow 1->2->3->4
  let slow = new ListNode(head);
  let fast = new ListNode(head.next);
  while (slow !== fast) {
    if (slow === null && fast === null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}
