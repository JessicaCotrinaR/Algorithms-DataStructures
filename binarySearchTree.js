class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}
let mybst = new BinarySearchTree();
mybst.insert(3);
mybst.insert(3);
// mybst.root = new Node(12);
// mybst.root.left = new Node(8);
// mybst.root.right = new Node(15);
//new level
// mybst.root.left.left = new Node(5); //less than 12 but greater than 8
// mybst.root.left.right = new Node(25);
console.log(mybst);
