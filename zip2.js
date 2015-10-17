
function zip(arrays) {

	var maxArrayLength = 0;
	var results = [];

	arrays.forEach(function(arr) {
		if (arr.length > maxArrayLength) maxArrayLength = arr.length;
	});

	for (var i = 0; i < maxArrayLength; i++) {
		var temp =[];
		arrays.forEach(function(arr) {
			temp.push(arr[i]);
		});
		results.push(temp);
	}
	return results;
}

// get the max array length
// loop through the one elem at a time
// loop through maxArray Length as index
	// get each elem from the arrays and create a new array
	// push that new array to results;

console.log(zip([[1,2,3,4], ['a','b','c'], ['hello', 'world']]));

 // [[1,'a','hello'], [2,'b','world'], [3,'c', undefined], [4,undefined, undefined]]);