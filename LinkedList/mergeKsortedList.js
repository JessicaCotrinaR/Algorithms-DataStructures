/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let arr = [];
  for (let i = 0; i < lists.length; i++) {
    let innerList = lists[i];
    while (innerList !== null) {
      arr.push(innerList.val);
      innerList = innerList.next;
    }
  }
  arr.sort((a, b) => a - b);
  let dummyHead = new ListNode(-1);
  let curr = dummyHead;
  for (let i = 0; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]); //-1->1
    curr = curr.next;
  }
  return dummyHead.next;
};
