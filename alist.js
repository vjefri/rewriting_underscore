//////////////////////
///Arrays and Lists///
//////////////////////

function arrayToList(array) {
    var list = null; // dynamic, changes at each itteration of for loop

    // from the last elem to the first elem
    // builds the structure from the inside out {{{}}}
    for (var i = array.length - 1; i >= 0; i--)

        list = {
        value: array[i], // this is constant, current elem
        rest: list // where the magic happens //
            // rest contains the previous list value
            // null => { value: 30, rest: null } => 
            // { value: 20, rest: { value: 30, rest: null } }
    };

    return list;
}

function listToArray(nestedObject, result) {
    // we need to extract value

    var array = [];

    // 1. set node to nestedObject, there is an object, change node to node.rest object
    for (var node = nestedObject; node; node = node.rest) { // Important //
        // node changes to node.rest at each itteration
        // node.rest is a new inner object at each itteration
        // it goes from the outside in. 
        // you need a way to access the object in rest at each itteration

        array.push(node.value);
    }

    return array;
}

function prepend(num, func) {
	// the second argument is a function so it is executed first because it is inside. It returns a list. The outer function exectues and that list is then added to rest:
    return {
        value: num,
        rest: func
    };

}

function nth(list, num) {
	var objIndex = 0;
	// keep objIndex of the current object

	for(var node = list; node; node = list.rest) {
		// if the current object index is the index provide then return value
		if (objIndex == num) return node.value;
		objIndex++;
	}

}

console.log(arrayToList([10, 20, 30]));

// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
