// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



var stringifyJSON = function(obj) {

  var stringified = '';

  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    return stringified + obj;
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var output = [];
    for (var i = 0; i < obj.length; i++) {
      output.push(stringifyJSON(obj[i]));
    }
    return '[' + output + ']';
  } 

  if (typeof obj === 'function' || obj === undefined) {
    return 'null';
  }

  if (typeof obj === 'object') {
    var keyValue = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue; 
      } else {
        var stringifiedValues = stringifyJSON(obj[key]);
        keyValue.push('"' + key + '"' + ':' + stringifiedValues);
      }
    }
    return '{' + keyValue + '}';    
  }
};
