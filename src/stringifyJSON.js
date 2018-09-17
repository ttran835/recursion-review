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
        keyValue.push('"'+ key + '"' + ':' + stringifiedValues)
      }
    }
    return '{' + keyValue + '}';    
  };
};

console.log(stringifyJSON({name: 'Tim', name2: 'Hayden', number: 4}) === JSON.stringify({name: 'Tim', name2: 'Hayden', number: 4}));
console.log(stringifyJSON({name: 'Tim', name2: 'Hayden', number: 4}));
console.log(JSON.stringify({name: 'Tim', name2: 'Hayden', number: 4}));
// console.log(stringifyJSON(true) === JSON.stringify(true));
// console.log(stringifyJSON(false) === JSON.stringify(false));
// console.log(stringifyJSON('Hello world') === JSON.stringify('Hello world'));
// console.log(stringifyJSON([8, 'hi']) === JSON.stringify([8, 'hi']));


unstringifiableValues = [
  {
    'functions': function() {},
    'undefined': undefined, 
    'hi': 'hello'
  }
];


// unstringifiableValues = [function() {}, undefined];
console.log(stringifyJSON(unstringifiableValues)); // [{}]
console.log(JSON.stringify(unstringifiableValues))
 console.log(stringifyJSON(unstringifiableValues) === JSON.stringify(unstringifiableValues));


