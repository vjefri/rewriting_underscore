/* Tried to understand what was going on from the testcases. I probably 
got someting wrong but if I find any issues I will fix them later. Still
think some of the test cases are weird. So take my solution with a grain
of salt.*/

function findIndex(arr, predicate, value) {
    var result;
    var first = true;
    if (typeof predicate === 'function') {
        arr.forEach(function(obj, objIndex) {
            if (predicate(obj)) {
                first = false;
                result = objIndex;
            }
        });
    }

    if (typeof predicate === 'object') {
        arr.forEach(function(obj, objIndex) {
            for (var key in obj) {
                if (predicate[key] === obj[key]) {
                    first = false;
                    result = objIndex;
                }
            }
        });
    }

    if (typeof predicate === 'string' && value === undefined) {
        arr.forEach(function(obj, objIndex) {
            if (obj[predicate] === true && first) {
                first = false;
                result = objIndex;
            }
        });
    }

    if (typeof predicate === 'string') {
        arr.forEach(function(obj, objIndex) {
            if (obj[predicate] === value && first) {
                first = false;
                result = objIndex;
            }
        });
    }

    return result;
}
// check each obj in arr
// for each prop in obj
// chech if pred is met
// if met return index of obj

// returns the index

var users = [{
    'user': 'barney',
    'active': false
}, {
    'user': 'fred',
    'active': false
}, {
    'user': 'pebbles',
    'active': true
}];

console.log(findIndex(users, function(users) {
    return users.user == 'barney';
}));
// → 0

// using the `console.log(matches` callback shorthand
console.log(findIndex(users, {
    'user': 'fred',
    'active': false
}));
// → 1

// using the `console.log(matchesProperty` callback shorthand
console.log(findIndex(users, 'active', false));
// → 0

// using the `console.log(property` callback shorthand
console.log(findIndex(users, 'active'));
// → 2
