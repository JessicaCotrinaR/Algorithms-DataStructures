function swapNodesinPairs(head) {
  let dummyHead = new LinkList(-1);
  dummyHead.next = head;
  let prev = dummyHead;
  while (head && head.next) {
    let n1 = head;
    let n2 = head.next;
    //swap
    prev.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    //
    prev = n1;
    head = n1;
  }
  return dummyHead.next;
}

//let dummyHead = new ListNode(-1)
dummyHead.next = head;
let prev = dummyHead;

while (head && head.next) {
  let i = head;
  let j = head.next;
  //swap
  prev.next = j;
  i.next = j.next;
  j.next = i;
  //
  prev = i;
  head = i.next;
}
return dummyHead.next;
