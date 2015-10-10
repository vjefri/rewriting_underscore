function chunk(arr, size) {
    var results = [];
    var copyArr = arr;
    
    while (copyArr.length >= size) {
    	results.push(copyArr.splice(0, size));
    }
    if (copyArr.length < size && copyArr.length != 0) {
        results.push(copyArr.splice(0));
    }
    return results;
}

// while arr.length >= size
	// cut elems of size and push to results
// when arr.length < size, get the last remaining elems and push to results

// tests //

console.log(chunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]
console.log(chunk(['a', 'b', 'c', 'd'], 3)); // [['a', 'b', 'c'], ['d']]
