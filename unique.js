function unique(collection, target) {
	var count = 0;
	collection.forEach(function(val) {
		if (val === target) count++;
	});

	if (count === 0) return false;
	else if (count > 1) return false;
	else return true; 
}

// for each elem, 
	// if target found more than once, return false, 
	// else return true

console.log(unique([1, 1, 1, 2, 3], 1)) // F
console.log(unique([1, 1, 1, 2], 2)) // T
console.log(unique([1, 1, 1, 2], 0)) // F 