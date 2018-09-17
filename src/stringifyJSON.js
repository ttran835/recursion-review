// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {

  var stringified = '';

  // if obj is a primitive value (e.g. a number, null, boolean, string.)
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return stringified + obj;
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // if obj is an array
  if (Array.isArray(obj)) {
    var output = [];
  // iterate through array  
    for (var i = 0; i < obj.length; i++) {
    // invoke stringifyJSON on each elt of array
      output.push(stringifyJSON(obj[i]));
    }
  return '[' + output + ']';
  } 

  // if obj is a function
  // return undefined

  // if obj is an object
  // iterate through each key, value pair
  // if 
  // 

};

console.log(stringifyJSON(9) === JSON.stringify(9));
console.log(stringifyJSON(null) === JSON.stringify(null));
console.log(stringifyJSON(true) === JSON.stringify(true));
console.log(stringifyJSON(false) === JSON.stringify(false));
console.log(stringifyJSON('Hello world') === JSON.stringify('Hello world'));
console.log(stringifyJSON([8, 'hi']) === JSON.stringify([8, 'hi']));
