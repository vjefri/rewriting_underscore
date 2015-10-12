function indexOf2(arr, val, from) {
	var n = from; 
	if (from === undefined) n = 0;
	for (var i = n; i < arr.length; i++) {
		if (arr[i] === val) return i;
	}
	return undefined; 
}

console.log(indexOf2([1, 2, 1, 2], 2));
// → 1

// using `fromIndex`
console.log(indexOf2([1, 2, 1, 2], 2, 2));
// → 3

// performing a binary search
console.log(indexOf2([1, 1, 2, 2], 2, true));
// → 2

// Im going to come back to the binary search