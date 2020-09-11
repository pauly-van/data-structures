

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index]) { 
    let linkedList = this._storage[index];
    this._storage[index] = [linkedList].push(v);
  }
  this._storage[index] = v;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (Array.isArray(this._storage[index])) { // need to retrieve elements in linkedlist
    console.log('is array is working');
  }
  return this._storage[index];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[index];
};

var newTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 */


