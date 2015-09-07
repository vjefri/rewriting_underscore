function reject(list, predicate) {
	var result = [];
	list.forEach(function(val) {
		if (!predicate(val)) result.push(val)
	});
	return result;
}

var test = reject([1, 2, 3, 4, 5, 6], function(num) {
	return num % 2 == 0;
});

console.log(test);
// [1, 3, 5]