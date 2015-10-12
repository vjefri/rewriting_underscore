// mutate array //
function pullAt(arr) {
	var args = Array.prototype.slice.call(arguments);
	var values = args.slice(1, args.length);
	values.forEach(function(val, index) {
		arr.forEach(function(aval, aindex) {
			if (index == aindex) arr.splice(aindex, 1);
		});
	});
	return arr;
}

var array = [5, 10, 15, 20];
var evens = pullAt(array, 1, 3);

console.log(evens);
// → [10, 20]