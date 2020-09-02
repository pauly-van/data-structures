var Stack = function() {
  var someInstance = {};
  var counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    if (counter === 0) {
      return undefined;
    }
    let objKeys = Object.keys(storage);
    let lastElement = objKeys[objKeys.length - 1];
    let poppedElement = storage[lastElement];
    counter--;
    delete storage[lastElement];
    return poppedElement;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};