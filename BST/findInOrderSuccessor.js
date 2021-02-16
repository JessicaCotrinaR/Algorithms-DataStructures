function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findInOrderSuccessor = function (inputNode) {
  // your code goes here
  // 5 -> 9 -> 10 -> 11 -> 12 -> 14 -> 20 -> 25
  // right: the left most node in right subtree
  // if (inputNode.right) return inputNode.left
  if (inputNode.right) {
    let nodeRight = inputNode.right;
    if (nodeRight.left) {
      return nodeRight.left;
    } else {
      return nodeRight;
    }
  } else {
    let parentNode = inputNode.parent;

    while (inputNode.key > parentNode.key) {
      //
      parentNode = parentNode.parent;
      if (parentNode === null) {
        return null;
      }
    }
    return parentNode;
  }
  // parent
};

BinarySearchTree.prototype.insert = function (key) {
  var root = this.root;
  if (!root) {
    this.root = new Node(key);
    return;
  }
  var currentNode = root;
  var newNode = new Node(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};
BinarySearchTree.prototype.getNodeByKey = function (key) {
  var currentNode = this.root;

  while (currentNode) {
    if (key === currentNode.key) {
      return currentNode;
    }

    if (key < currentNode.key) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return null;
};
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

// Get a reference to the node whose key is 9
var test = bst.getNodeByKey(12);

// Find the in order successor of test
var succ = test ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
if (succ) {
  console.log("Inorder successor of " + test.key + " is " + succ.key);
} else {
  console.log("Inorder successor does not exist");
}
