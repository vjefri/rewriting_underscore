function partition(collection, predicate, thisArg) {
	var results = [];

	if (thisArg) predicate.apply(thisArg);

	var truthy = collection.filter(function(val) {
		if (predicate(val)) return val;
	});

	results.push(truthy);

	var falsy = collection.filter(function(val) {
		if (!predicate(val)) return val;
	});

	results.push(falsy);
	return results;
}

// elements truthy, elements falsy

console.log(partition([1, 2, 3], function(n) {
  return n % 2;
}));
// → [[1, 3], [2]]

console.log(partition([1.2, 2.3, 3.4], function(n) {
  return this.floor(n) % 2;
}, Math));
// → [[1.2, 3.4], [2.3]]