var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //return the index. use this.storage and push it into the index
  if (this._storage[index] && this._storage[index].includes(k)) {
    for (let i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i] === k) {
        this._storage[index][i] = v;
      }
    }
  } else if (this._storage[index]) {
    this._storage[index].push([k, v]);
  } else {
    this._storage[index] = [k, v];
  }
};



HashTable.prototype.retrieve = function(k) {
  let storage = this._storage;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] === undefined) {
    return undefined;
  } else if (this._storage[index].length > 1) {
    for (let i = 0; i < this._storage[index].length; i++) {
      if (storage[index][i].includes(k)) {
      //if the result is an array of 2
        if (storage[index][i].length === 2) {
          return storage[index][i][1];
        } else {
        //now if the result is an array of one
          return this._storage[index][1];
        }
      }
    }
    return this._storage[index][0];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); //if it's an array
  if (this._storage[index].length > 1) {
    for (let i = 0; i < this._storage[index].length; i++) {
      if (Array.isArray(this._storage[index]) && this._storage[index].includes(k)) {
        this._storage[index].splice(0, 2);
      }
    }
    //else if it's just an object, delete
  } else {
    delete this._storage[index];
  }
};   
/*
 * Complexity: What is the time complexity of the above functions?
 insert is linear complexity because there is a set number of actions to take (generate hash value, iterate through key, overwrite or add tuple) that don't increase and it's the same for anything you insert
 retrieve is a linear complexity because we just iterate through the whole object to find X, for the worst case scenario. 
 remove is a linear complexity because there are steps that don't increase complexity. it just iterates through the array if multiple values exist. best case, it's constant, but worst case is linear depending on how long the array is.
 */


