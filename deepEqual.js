//////////////////
//// Deep Equal///
//////////////////

function deepEqual(a, b) {
    var result = true;

    var a = JSON.stringify(a);
    var b = JSON.stringify(b);

    for (var prop in a) {
        // objects cannot be equal to each other even if they look identical
        // order is not guarenteed

        if (a[prop] != b[prop]) result = false;

        if (typeof a[prop] == 'object') deepEqual(a[prop], b[prop]);
    }

    return result;
}


var obj = {
    here: {
        is: "an"
    },
    object: 2
};

console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {
    here: 1,
    object: 2
}));

// → false
console.log(deepEqual(obj, {
    here: {
        is: "an"
    },
    object: 2
}));
// → true


function deepEqual(a, b) {
    if (a === b) return true;
    // if objects are the same object, return true

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object")
        // if a and b are null and a and b are not objects, then return false
        return false;

    var propsInA = 0,
        propsInB = 0;''
        // counter for the number of properties
        // if they are equal we return true

    for (var prop in a)
        propsInA += 1;

    for (var prop in b) {
        propsInB += 1;
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
        	// this is where the magic happens
        	// i personally don't like to coerse values because it makes it confusing to follow
        	// uses recursion to check deeply.
        	// weird usage of prop in within if statement. 
        	// if it is deeply equal we do not want to return false, so we change the result from true to false !(true) == false, same thing with prop in a. 

            return false;
    }

    return propsInA == propsInB;
}
