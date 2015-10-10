function drop(arr, n) {
	if (n === undefined) {
		return arr.slice(1, arr[arr.length - 1]);
	}
	else if (n === 0) {
		return arr.slice(0, arr[arr.length - 1]);
	}
	else if (n > arr.length) {
		return [];
	}
	else {
		return arr.slice(n, arr[arr.length - 1]);
	}
}

// tests //
console.log(drop([1, 2, 3]));
// → [2, 3]

console.log(drop([1, 2, 3], 2));
// → [3]

console.log(drop([1, 2, 3], 5));
// → []

console.log(drop([1, 2, 3], 0));
// → [1, 2, 3]