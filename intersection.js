function intersection(arrays) {
    var arrays = [].slice.call(arguments);

    return arrays.reduce(function(prevArr, currentArray) {
        return prevArr.filter(function(val) {
            return currentArray.indexOf(val) !== -1;
        });
    });

}


// returns shared values
console.log(intersection([1, 2], [4, 2], [2, 1])); // [2]
console.log(intersection([1, 2, 3], [101, 2, 1, 10, 3], [2, 1, 3])); // [1, 2, 3]
console.log(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1], [1, 3, 3, 2])); //[1, 2]
