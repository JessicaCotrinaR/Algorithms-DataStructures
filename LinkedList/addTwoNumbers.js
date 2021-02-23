/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyhead = new ListNode(-1);
  let current = dummyhead;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
  }
  current.next = new ListNode(sum);
  return dummyhead.next;
};
