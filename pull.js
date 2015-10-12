// mutate array //
function pull(arr) {
	var args = Array.prototype.slice.call(arguments);
	var values = args.slice(1, args.length);

	values.forEach(function(val) {
		arr.forEach(function(aval, i) {
			if (val == aval) arr.splice(i, 1);
		});
	});
	return arr;
}

var array = [1, 2, 3, 1, 2, 3];
pull(array, 2, 3)

console.log(array);
// → [1, 1]