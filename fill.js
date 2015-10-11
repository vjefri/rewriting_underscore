function fill(arr, val, start, end) {
	var result = arr;
	if (start !== undefined && end !== undefined) {
		for (var start = start; start < end; start++) {
			result[start] = val;
		}
	}
	else {
		for (var i = 0; i < arr.length; i++) {
			result[i] = val;
		}
	}
	return result; 
}

var array = [1, 2, 3];

console.log(fill(array, 'a'));
// → ['a', 'a', 'a']

console.log(fill(Array(3), 2));
// → [2, 2, 2]

console.log(fill([4, 6, 8], '*', 1, 2));
// → [4, '*', 8]