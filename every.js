function every(list, predicate) {
	var result = true;
	list.forEach(function(val) {
		if (!predicate(val)) result = false;
	});
	return result; 
}
var list = [1, 2, 3, 4, 5, 6];

var evens = every(list, function(val) {
		return val % 2 === 0;
	});

console.log(evens);

var odds = every([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

console.log(odds);

var belowSeven = every([1, 2, 3, 4, 5, 6], function(num){ return num < 7; });

console.log(belowSeven);
