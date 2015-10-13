function slice(arr) {
	var args = Array.prototype.slice.call(arguments);
	var start = args[1];
	var end = args[2];

	var results = [];
	if (end === undefined) end = arr.length;

	for (start; start <= end; start++) {
		results.push(arr[start]);
	}
	return results;
}

console.log(slice([1, 2, 3], 1, 2)) // [2, 3]
console.log(slice([1, 2, 3], 2, 2)) // [3]