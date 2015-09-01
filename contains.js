function map (collection, callback) {
  var result = [];
  collection.forEach(function(val) {
    result.push(callback(val));
  });
  return result;
}
var multiplyBy2 = map([1, 2, 3, 4, 5], function(val) {
 return val * 2;
});

console.log(multiplyBy2)
