var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {storage: {}, counter: 0};
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[this.counter]=value;
    this.counter++;
  },
  dequeue: function(){
    if(this.counter === 0){
      return undefined;
    }
    let objKeys = Object.keys(this.storage);
    let firstElement = objKeys[0];
    let shiftedElement = this.storage[firstElement];
    this.counter--;
    delete this.storage[firstElement];
    return shiftedElement;
  },
  size: function(){
    return this.counter;
  }
};


