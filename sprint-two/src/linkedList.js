var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let tailVal = Node(value);
    if (list.tail !== null) {

      let previousTail = list.tail;
      previousTail.next = value;
      list[previousTail.value] = previousTail;
      list.head["next"] = value;
      let newVal = Node(value);
      list.tail = newVal;
    }
    if ( list.tail === null && list.head === null)  {
      list.tail = tailVal;
      list.head = tailVal;
      list[list.tail[value]] = tailVal;
      
    } 
    
    //list.tail = tailVal;
 
    //console.log(tailVal);
    
  };

  list.removeHead = function() {
    let currentHead = list.head;
    console.log(currentHead);
    console.log(list[list.head.next]);
    list.head = list[list.head.next]; //need to figure out how to change next
    let nextHead = list.head.next;
    console.log(nextHead + 'key');
    list.head = list[nextHead];
    delete list[currentHead.value];
    return currentHead;
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
