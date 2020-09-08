var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let tailVal = Node(value);
    if ( list.tail === null ) {
      list.head = tailVal;
    }   
    list.tail = tailVal; 
    list[tailVal.value] = tailVal; 
  };

  list.removeHead = function() {
    
  };

  list.contains = function(target) {

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
