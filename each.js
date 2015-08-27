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

each([1, 2, 3, 4, 5], function(val) {
	console.log(val);
});

each({name: "Jefri", city: "LA"}, function(val) {
  console.log(val);
});
