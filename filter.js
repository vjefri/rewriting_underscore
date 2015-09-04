function each(collection, callback) {
	if (Array.isArray(collection)) {
		for (var i = 0; i < collection.length; i++) {
			callback(collection[i]);
		}
	} else {
		for (var key in collection) {
			callback(collection[key]);
		}
	}
}

function filter(list, predicate) {
	var result = [];
	each(list, function(val) {
		if (predicate(val)) result.push(val);
	});
	return result; 
}

var evens = filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// [2, 4, 6]

console.log(evens);