function dropRight(arr, n){
	if (n > arr.length) return [];
	else if (n === undefined) return arr.slice(0, arr.length - 1);
	else if (n === 0) return arr.slice(0, arr.length);
	else return arr.slice(0, arr.length - n);
}

console.log(dropRight([1, 2, 3]));
// → [1, 2]

console.log(dropRight([1, 2, 3], 2));
// → [1]

console.log(dropRight([1, 2, 3], 5));
// → []

console.log(dropRight([1, 2, 3], 0));
// → [1, 2, 3]