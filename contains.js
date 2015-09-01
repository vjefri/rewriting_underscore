function contains (collection, target) {
	var flag = false;
	collection.forEach(function(val) {
		if (target === val) {
			flag = true; 
		}
	});
	return flag;
}

console.log (
	contains([1, 2, 3, 4, 5], 1), // true
	contains([1, 2, 3, 4, 5], 0) // false
	)