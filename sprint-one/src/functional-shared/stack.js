var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {storage: {}, counter: 0};
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.counter]=value;
    this.counter++;
  },
  pop: function(){
    if(this.counter === 0){
      return undefined;
    }
    let objKeys = Object.keys(this.storage);
    let lastElement = objKeys[objKeys.length-1];
    let poppedElement = this.storage[lastElement];
    this.counter--;
    delete this.storage[lastElement];
    return poppedElement;
  },
  size: function(){
    return this.counter;
  }
};


