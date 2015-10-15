// return the values they don't share
function complement(A, B) {
    return A.filter(function(elem) {
        return B.indexOf(elem) == -1;
    });
}

function unique(arr) {
    return arr.filter(function(elem, pos) {
        return arr.indexOf(elem) == pos;
    });
}

function xor() {
        var args = [].slice.call(arguments);
    return args.map(unique).reduce(function(previous, current) {
        return complement(previous, current).concat(complement(current, previous));
    });
}

console.log(xor([1, 2], [4, 2])); // [1, 4]
console.log(xor([1, 2, 3], [5, 2, 1, 4])) // [3, 5, 4]
console.log(xor([1, 2, 5], [2, 3, 5], [3, 4, 5])) // [1, 4, 5]
console.log(xor([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])) // [1, 4, 5]
console.log(xor([1, 1])) // [1]
