/*
Looks through each value in the list, returning the first one that passes a truth test 
(predicate), or undefined if no value passes the test. The function returns as soon 
as it finds an acceptable element, and doesn't traverse the entire list.
*/

function each(collection, callback) {
	if (Array.isArray(collection)) {
		for (var i = 0; i < collection.length; i++) {
			callback(collection[i]);
		}
	} else {
		for (var key in collection) {
			callback(collection[key]);
		}
	}
}

function find(list, predicate) {
	var flag = false
	var result; 
	each(list, function(val) {
		if (predicate(val) && flag === false) {
			result = val;
			flag = true; 
		}
	});
	return result; 
}

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); // 2
var odd = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 != 0; }); // 1
var greater = find([1, 2, 3, 4, 3, 6], function(num){ return num > 3}); // 4


console.log(even);
console.log(odd);
console.log(greater);