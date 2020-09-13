var Graph = function() {
  this.graph = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // push to nodes
  this.graph[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let key in this.graph) {

    if (key === node.toString()) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //if we have time, we can sort every edge array and then just find it by charAt
  let nodeToDelete = this.graph[node];
  delete this.graph[node];
  for (let key in this.graph) {
    for (let i = 0; i < this.graph[key]; i++) {
      if (this.graph[key][i] === node) {
        this.graph[key].splice(i, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //for fromnode, we check it tonode is in the array
  for (let i = 0; i < this.graph[fromNode].length; i++) {
    if (this.graph[fromNode][i] === toNode) {
      return true;
    }

  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  //node={4 : [1,2,3]}
  //this.graph[node] = {edges: []};
  this.graph[fromNode].push(toNode);
  this.graph[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.graph[fromNode].length; i++) {
    if (this.graph[fromNode][i] === toNode) {
      this.graph[fromNode].splice(i, 1 );
    }
  }
  for (let i = 0; i < this.graph[toNode].length; i++) {
    if (this.graph[toNode][i] === fromNode) {
      this.graph[toNode].splice(i, 1 );
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for ( let key in this.graph) {
    cb(key);
  }
};

/* Complexity: What is the time complexity of the above functions?
 addnode is a constant complexity because no matter what, it just does 1 action
 contains is a linear complexity because worst case, it will iterate through the entire object
 removenode is a linear complexity because worst case, it loops thru entire object to find X, and then performs remove
 hasedge is linear complexity. worst case loops thru entire object to find edge
 addedge is constant. only 2 things it does even for worst case- push twice.
 removeedge is linear. loops thru entire thing for worst case. and then splices
 foreachnode is linear. it will always loop thru the entire thing to perform callback
 */