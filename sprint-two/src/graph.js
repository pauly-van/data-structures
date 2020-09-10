

// Instantiate a new graph
var Graph = function() {
  // create container for nodes. Maybe array?
  // create container for edges. Object? 
  // we can use then have an array of nodes to see which ones are connected
  /* Example: 
        nodes = [1,2,3,4,5,6];  // might be a problem with duplicate node values
        edgesObj = {node[5]: node[1],   
                    node[2]: node[6]],
                    node[3]: node[4]}  
                    // Do we care about nodes with more than one edge? if so we might want to do something like below
                    node[5]: {connectedTo: [node[1], node[2]]};
        };
        */
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // push node into our nodes array
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // see if node value is included in node array, and return index?
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // use contains function and remove from array
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // traverse through edges object to see if nodes are connected(or in our case if they are in the same inner array)
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // use contains to find 1st node and add an edge property to our edge object
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // traverse through edges object and delete where fromNode is contained
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // No clue how to do this, maybe use edges to go through nodes?
};

var newGraph = new Graph();

/*
 * Complexity: What is the time complexity of the above functions?
 */


