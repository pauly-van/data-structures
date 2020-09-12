var BinarySearchTree = function(value) {
}

BinarySearchTree.prototype.insert = function(data){
};

BinarySearchTree.prototype.contains = function(value){
  let hasChild = false;
  let checkChild = function(object) {
    if (treeObj.left === target || treeObj.right === target) {
      hasChild = true;
    }
    let innerChild = treeObj.left;
    return checkChild(innerChild);
  };
  checkChild(this);
  return hasChild; 
};

BinarySearchTree.prototype.depthFirstLog = function(cb){
  return cb;
};

var newBST = new BinarySearchTree();

/*
 * Complexity: What is the time complexity of the above functions?
 */
