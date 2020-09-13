var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryTreeMethods);
  newTree.value = value;
  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  let newNode = {};
  newNode.value = value;
  let traverseInsert = function(currentNode) {
    if (currentNode.value > value && currentNode.left === undefined) {
      currentNode.left = newNode;
    } else if (currentNode.value > value) {
      traverseInsert(currentNode.left);
    } else if (currentNode.value < value && currentNode.right === undefined) {
      currentNode.right = newNode;
    } else if (currentNode.value < value) {
      traverseInsert(currentNode.right);
    }
  };
  traverseInsert(this);
  
};

binaryTreeMethods.contains = function(value) {
  let hasChild = false;
  let checkChild = function(object) {
    if (object.value === value ) {
      hasChild = true;
    } else if ( object.right !== undefined && value > object.value) {
      checkChild(object.right);
    } else if (object.left !== undefined && value < object.value) {
      checkChild(object.left);
    }
  };
  checkChild(this);
  return hasChild;
};

binaryTreeMethods.depthFirstLog = function(cb) {
  let traverseApply = function (currentNode) {
    cb(currentNode.value);
    if (currentNode.left !== undefined) {
      traverseApply(currentNode.left);
    }
    if (currentNode.right !== undefined) {
      traverseApply(currentNode.right);
    }
  };
  traverseApply(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 Insert is a linear complexity
 contains is a linear complexity
 depthFirstLog is a linear complexity
 */

 