// The beauty of functional programming is in chaining. 

var arrays = [[1, 2, 3], [4, 5, 6], [7, 8]];

function flatten(arr) {
	// Concat
	var result = arr.reduce(function(a, b) {
		return a.concat(b);
	}).
	reduce(function(a, b) {
		return a + b;
	});

	return result;
}

console.log(flatten(arrays)); // 36

