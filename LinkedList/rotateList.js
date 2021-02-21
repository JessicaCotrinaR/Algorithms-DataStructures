/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null) return head;
  let dummy = new ListNode();
  let fast = dummy;
  let slow = dummy;
  //calculate the length of the list
  let length = 0;
  dummy.next = head;
  while (fast.next) {
    length++;
    fast = fast.next;
  }
  k = k % length;
  for (let i = 1; i <= length - k; i++) {
    slow = slow.next;
  }
  fast.next = dummy.next;
  dummy.next = slow.next;
  slow.next = null;
  return dummy.next;
};
