var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    let newNode = Node(value); // create new node

    if (list.tail === null && list.head === null) { // when there are no nodes in our list container
      list.head = newNode;
      //list.head.next = list.tail;
      list.tail = newNode;

    }

    keyFinder(list, value);
  };


  list.removeHead = function() {
    let currentHead = list.head;
    //now we declare the new head and delete the old one
    //console.log(currentHead);
    list.head = list.head.next.next;

    return currentHead.value;


    // let currentHead = list.head;  // throw away container for storing old head

    // list.head = list[list.head.next]; //need to figure out how to change next (this is undefined because list[5] deosn't exists when only 2 nodes are in list)
    // // I think we need to condition a scenario to assign next to tail if there are only 2 nodes
    // let nextHead = list.head.next; // easy var for head next value
    // console.log(nextHead + 'key');
    // list.head = list[nextHead];  // make 2nd node from list head
    // delete list[currentHead.value];  // delete head node from list
    // return currentHead;  // return deleted head node
  };

  list.contains = function(target) {
    for (let key in list) {
      //console.log();
      if ((list[key].value) && list[key].value === target) {
        return true;
      } else if ((list[key].value) && list[key].value !== null) {
      } else {
        return false;
      }
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;


  return node;
};

var keyFinder = function(list, val) {
  for (let key in list) {
    //console.log(list[key].next.value);
    if (list[key].next === null) {
      list[key].next = Node(val);
      list.tail = Node(val);
      return list[key].value;
    }
    if (key.next !== null) {
      keyFinder(list[key], val);
    }

  }
};