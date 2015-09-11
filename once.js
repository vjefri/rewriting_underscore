var once = function(func) {
	var called = false;
	return function() {
		if (!called) {
			called = true;
			return func();
		} else {
			return false;
		}
	};
};

var logOnce = once(function(){ 
	return console.log('hello'); 
});

logOnce(); // hello
logOnce(); 
