function reduce(collection, initial, callback) {
	collection.forEach(function(val) {
		if (initial === undefined) initial = val;
		else initial = callback(initial, val);
	});
	return initial;
}

// tests // 

var total = reduce([1, 2, 3, 4], 0, function(memo, val) {
	return val + memo; 
});

console.log(total);