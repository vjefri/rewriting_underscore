function union() {
    var arrays = Array.prototype.slice.call(arguments);
    var arr = [].concat.apply([], arrays);
    var notFound = true;

    var results = [];

    arr.forEach(function(val) {
        results.forEach(function(rval) {
            if (val === rval) notFound = false;
        });

        if (notFound) {
            results.push(val);
            notFound = true;
        }
    });

    return results;
}

// gets the uniq value from each of the arrays
// for each elem, 
// if elem not found in empty arr, push in

console.log(union([1, 2], [4, 2], [2, 1])); // [1, 2, 4]
