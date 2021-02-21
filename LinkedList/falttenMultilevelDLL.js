/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 * 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL
[1,2,3,4,5,6,null]
[7,8,9,10,null]
[11,12,null]
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) return head;
  let stack = []; //store all rest part of linkedlist nodes when has child
  let cur = head;
  while (cur) {
    if (cur.child) {
      if (cur.next) stack.push(cur.next); //must check cur.next is null or not before added to stack
      cur.next = cur.child;
      cur.next.prev = cur; //because it is doubly linkedlist
      cur.child = null; //already assigned to next so now no child anymore. set null
    } else if (!cur.next && stack.length != 0) {
      //now reach tail of linkedlist
      cur.next = stack.pop();
      cur.next.prev = cur; // because it is doubly linkedlist
    }
    cur = cur.next;
  }
  return head; //return reference of head
};
