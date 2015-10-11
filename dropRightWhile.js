function dropRightWhile(arr, predicate) {

}

// tests //

var users = [{
    'user': 'barney',
    'active': true
}, {
    'user': 'fred',
    'active': false
}, {
    'user': 'pebbles',
    'active': false
}];

// using the `_.matches` callback shorthand
_.pluck(_.dropRightWhile(users, {
    'user': 'pebbles',
    'active': false
}), 'user');
// → ['barney', 'fred']

// using the `_.matchesProperty` callback shorthand
_.pluck(_.dropRightWhile(users, 'active', false), 'user');
// → ['barney']

// using the `_.property` callback shorthand
_.pluck(_.dropRightWhile(users, 'active'), 'user');
// → ['barney', 'fred', 'pebbles']
