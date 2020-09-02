var Queue = function() {
  var someInstance = {};
  let counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter]=value;
    counter++;
  };

  someInstance.dequeue = function() {
    if(counter === 0){
      return undefined;
    }
    let objKeys = Object.keys(storage);
    let firstElement = objKeys[0];
    let shiftedElement = storage[firstElement];
    counter--;
    delete storage[firstElement];
    return shiftedElement;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
