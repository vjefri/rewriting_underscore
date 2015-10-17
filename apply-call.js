var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7, 8, 9];


var result1 = [].concat.call(arr1, [arr2, arr3]);
var result2 = [].concat.apply(arr1, [arr2, arr3]);

console.log('Call Result: ',result1);
console.log('Apply Result: ', result2);

var game = {
	count: 0
}

function updateCount() {
	for (var i = 0; i < arguments.length; i++) {
		this.count += arguments[i];
	}
}

// this points to the game object
updateCount.apply(game, [1, 2, 3]);

console.log(game.count);