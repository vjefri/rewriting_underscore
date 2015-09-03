// will work for both arrays and objects // 

function eachRight(collection, callback) {
	if (Array.isArray(collection)) {
		for (var i = list.length - 1; i >= 0; i-- ) {
			callback(list[i]);
		}
	}
	else {
		for (var j = list.length - 1; j >= 0; j--) {
			callback(list[j]);
		}
	}
}


function reduceRight(list, iteratee, memo) {
	eachRight(list, function(val) {
		if (memo === undefined) memo = val;
		else memo = iteratee(memo, val);
	});
	return memo;
}

var list = [[0, 1], [2, 3], [4, 5]];
var flat = reduceRight(list, function(a, b) {
	return a.concat(b);
}, []);

console.log(flat); // [4, 5, 2, 3, 0, 1]

