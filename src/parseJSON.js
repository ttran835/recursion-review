// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json[0] === '[') { 
    return parseArray(json);
  } else if (json[0] === '{') {
    return parseObj(json);
  }
};

var parseArray = function(json) {
  var output = [];
  if (json[1] === ']') {
    return output; 
  }
};


var parsePrimitive = function(json) {
};

var parseObj = function(json) {
  var obj = {};
  if (json[1] === '}') {
    return obj;
  // we have encounted a key value pairß , {}, "c": "d"}
  } else if (json[1] === '"') {
    var keyValuePairs = members(json).slice(0, -1); // ["a", "b", "c", "d"]
    // for each elt in keyValuePairs
    for (var i = 0; i < keyValuePairs.length; i++) {
      if (i % 2 === 0) {
        obj[keyValuePairs[i]] = keyValuePairs[i + 1]; 
      }
    }
  }
  return obj;
};

// if there is only one k,v pair, call members only once '{"a": "b", "c": "d"}',
// if there are multiples, recursively call members
var members = function(json) {
  if (json.length === 0) {
    return;
  }

  var keyClosingQuotationIndex = json.slice(2).indexOf('"') + 2;
  var key = json.slice(2, keyClosingQuotationIndex);

  var propertyOpeningQuotationIndex = keyClosingQuotationIndex + 3;

  if (json[propertyOpeningQuotationIndex] === '"') {
    // find the index of the double quote that closes the property
    var closingPropertyQuotationIndex = json.slice(propertyOpeningQuotationIndex + 1).indexOf('"') + propertyOpeningQuotationIndex + 1;
    var property = json.slice(propertyOpeningQuotationIndex + 1, closingPropertyQuotationIndex);
  }


  // TODO return an array containing all the key value pairs
  return [key, property].concat(members(json.slice(closingPropertyQuotationIndex + 2)));
};

//'[{}]'

// '[]' 
// parseArray('[{}]')
// if next character is '{'
// parseObject('{}]')

// parseObject('{}]')
// if next character is '['
// parseArray()
// if next character ']'

parseableStrings = [
  // basic stuff
  '[]',
  '{"foo": ""}',
  '{}',
  '{"foo": "bar"}',
  '["one", "two"]',
  '{"a": "b", "c": "d"}',
  '[null,false,true]',
  '{"foo": true, "bar": false, "baz": null}',
  '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
  '{"boolean, true": true, "boolean, false": false, "null": null }'
];

parseableStrings.forEach(function(elt, i) {
  console.log('ourJSONResult: ', parseJSON(elt));
  console.log('nativeJSONResult:', JSON.parse(elt));
  console.log('does our result = native?: ', JSON.stringify(parseJSON(elt)) === JSON.stringify(JSON.parse(elt)));
});