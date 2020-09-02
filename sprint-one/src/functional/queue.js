var Queue = function() {
  var someInstance = {};
  let counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[counter++] = value; 
  };

  someInstance.dequeue = function() {
    let resetCnter = 0;
    if (counter === 0) {
      return undefined;
    }
    let objKeys = Object.keys(storage);
    let shiftedElement = storage[objKeys[0]];
    delete storage[objKeys[0]];
    counter--;
    _.each(storage, function(elem, key, storage) {
      storage[resetCnter++] = elem;
    });
    return shiftedElement;
  };

  someInstance.size = function() {
    return counter;
  };
  return someInstance;
};
