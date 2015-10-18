// return the values they don't share
// function complement(A, B) {
//     return A.filter(function(elem) {
//         return B.indexOf(elem) == -1;
//     });
// }

// function unique(arr) {
//     return arr.filter(function(elem, pos) {
//         return arr.indexOf(elem) == pos;
//     });
// }

// function xor() {
//     var args = [].slice.call(arguments);

//     return args.map(unique).reduce(function(acc, val) {
//      // get the unique values from one array, then from the next and join them. 
//      return complement(acc, val).concat(complement(val, acc));
//     });
// }

// another way

function xor() {

    var arrays = [].slice.call(arguments);

    var unique = function(array) {
        return array.filter(function(val, index) {
            return array.indexOf(val) == index
        });
    };

    if (arguments.length == 1) return unique(arguments[0]);

    return arrays.reduce(function(prevArr, currArr) {
        var left = prevArr.filter(function(val) {
            if (currArr.indexOf(val) == -1) return val;
        });

        var right = currArr.filter(function(val) {
            if (prevArr.indexOf(val) == -1) return val;
        });

        var result = unique(left.concat(right));

        return result;
    });
}

console.log(xor([1, 2], [4, 2])); // [1, 4]
console.log(xor([1, 2, 3], [5, 2, 1, 4])) // [3, 5, 4]
console.log(xor([1, 2, 5], [2, 3, 5], [3, 4, 5])) // [1, 4, 5]
console.log(xor([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])) // [1, 4, 5]
console.log(xor([1, 1])) // [1]
