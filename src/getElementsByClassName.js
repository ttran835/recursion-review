// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

/*
  potential pseudocode for getElementsByClassName without closure
  Used closure: 
    declare array inside function:
      The final solution will recurse thru function

  1. add parameter startNode
  2. if(startNode === undefined) {
      startNode = document.body
    };
      var matchinNodes = []; //once func runs thru array it'll stop? 
      if(startNode.hasClassName('className')) {
          matchingNodes = matchNode.concat(getElementsByClassName(className, ))
        }

*/

/* pseudocode for getElementsByClassName with closure

  var matchingNodes = [];
  var body = document.body
  function traverseTree (startNode) {
    First Item: 
      if(startNode.hasClass(className)) {
        matchingNodes.push(startNode);
      };
    iterate through all children of startNode 
      traverseTree(each body child); 
    };
  
  traverseTree(body);
  return matchingNodes; 
  


*/
var getElementsByClassName = function(className) {
  var matchingNodes = [];
  var body = document.body;
  function traverseTree (startNode) {
      if(startNode.classList && startNode.classList.contains(className)) { 
        matchingNodes.push(startNode); 
      };
    //iterate through all children of startNode
    for(var i = 0; i < startNode.childNodes.length; i++) {
      traverseTree(startNode.childNodes[i]);
      };   
    };
  traverseTree(body);
  return matchingNodes; 
};
