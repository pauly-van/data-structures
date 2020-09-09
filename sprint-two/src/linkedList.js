var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let tailVal = Node(value);   // create new node
    if (list.tail !== null) {     // when nodes already exist within our list

      let previousTail = list.tail;  // container to store old tail node
      previousTail.next = value;  // assign value of new node to next property within previousTail obj
      list[previousTail.value] = previousTail;  // adds previous tail into list obj
      list.head["next"] = value;  // assign value to next property of head obj (head.next and PreviousTail.next is now assigned to same 'value' ?)
      // I think above next needs to point to 2nd node in list instead of value of new node
      let newVal = Node(value); //  create new node (is this different somehow from line 7?)
      list.tail = newVal; // point tail to new node
    }
    if ( list.tail === null && list.head === null)  {  // when there are no nodes in our list container
      list.tail = tailVal;  // head and tail points to new node
      list.head = tailVal;
      list[list.tail[value]] = tailVal; // add node into our list
      
    } 
    
    //list.tail = tailVal;
 
    //console.log(tailVal);
    
  };

  list.removeHead = function() {
    let currentHead = list.head;  // throw away container for storing old head
    console.log(currentHead);
    console.log(list[list.head.next]);
    list.head = list[list.head.next]; //need to figure out how to change next
    let nextHead = list.head.next; // simplified head next value
    console.log(nextHead + 'key');
    list.head = list[nextHead];  // make 2nd node from list head
    delete list[currentHead.value];  // delete head node from list
    return currentHead;  // return deleted head node
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
