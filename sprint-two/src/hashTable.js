var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // create hash value
  if (this._storage[index] !== undefined) { // if array has items in it already
    for (let i = 0; i < this._storage[index].length; i++) { // iterate through to see if key is in array block
      if (this._storage[index][i] === k) { // if it is found than overwrite value
        this._storage[index] = [k, v];  
      }
    }
    let tuple = [];   
    let currentVal = this._storage[index];
    tuple.push(currentVal, [k, v]);
    this._storage[index] = tuple; // but if key isn't in array block but has other items in it create a tuple array
  } else {
    this._storage[index] = [k, v]; // if no items are in array index than simply add key and value
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) { // if nothing is in array block return undefined
    return undefined;
  } else if (this._storage[index].length > 1) { // but if there are more than one item in array block
    for (let i = 0; i < this._storage[index].length; i++) { // iterate through tuple arrays
      if (this._storage[index][i][0] === k) { // find the key that matches what we want to look for
        return this._storage[index][i][1]; // return it
      }
    }
  }
  return this._storage[index][1]; // but if only one item than return the value thats in the array block
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index]; // delete whole array block
};

var newTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 */


