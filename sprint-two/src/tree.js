var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

const extend = function(target, object) {
  for (let key in object) {
    target[key] = object[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let childObj = {};
  childObj.value = value;
  childObj.children = [];
  extend(childObj, treeMethods);
  this.children.push(childObj);
};

treeMethods.contains = function(target) {
  let hasChild = false;
  let checkChild = function(object) {
    if (object.value === target) {
      hasChild = true;
    }
    object.children.forEach(child => { checkChild(child); });
  };
  checkChild(this);
  return hasChild;
};

/*
 * Complexity: What is the time complexity of the above functions?
 extend is linear complexity
 addchild is constant
 contains is linear
 */
