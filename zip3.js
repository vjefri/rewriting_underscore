function zip(arrays) {

    var length = arrays.reduce(function(max, arr) {
        if (arr.length > max) max = arr.length;
        return max;
    }, 0);

    // I don't think I can solve it using reduce. 

}

console.log(zip([
    [1, 2, 3, 4],
    ['a', 'b', 'c'],
    ['hello', 'world']
]));

// [[1,'a','hello'], [2,'b','world'], [3,'c', undefined], [4,undefined, undefined]]);
