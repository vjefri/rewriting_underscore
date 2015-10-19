function zip(arrays) {

    var length = arrays.reduce(function(max, arr) {
        if (arr.length > max) max = arr.length;
        return max;
    }, 0);

    // get the range of numbers from 0 - 3

    return length;
}



console.log(zip([
    [1, 2, 3, 4],
    ['a', 'b', 'c'],
    ['hello', 'world']
]));

// [[1,'a','hello'], [2,'b','world'], [3,'c', undefined], [4,undefined, undefined]]);
