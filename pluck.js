function pluck(list, propertyName) {
	var result = [];
	list.forEach(function(obj) {
		result.push(obj[propertyName]);
	});
	return result; 
}

var stooges = [{name: 'moe', age: 40}, 
			   {name: 'larry', age: 50}, 
			   {name: 'curly', age: 60}];
var names = pluck(stooges, 'name');
console.log(names);
// ['moe', 'larry', 'curly']