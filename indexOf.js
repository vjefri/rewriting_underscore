var indexOf = function(collection, target) {
  var result = -1;
  collection.forEach(function(val, index) {
    if (val === target && result === -1) result = index;
  });
  return result;
};

console.log(indexOf([1, 2, 3, 4, 5], 4)) // 3
console.log(indexOf([1, 2, 3, 4, 5], 2)) // 1

