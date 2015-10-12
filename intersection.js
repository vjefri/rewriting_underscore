function intersection(arrays) {
    var arrays = Array.prototype.slice.call(arguments);
    var results = [];
    var first = arrays.shift();
    var valueMatch = false;
    var arrayMatches = 0;

    first.forEach(function(fval) {
        arrays.forEach(function(arr) {
            arr.forEach(function(val) {
                if (fval == val) valueMatch = true;
            });
            if (valueMatch) {
                arrayMatches++;
                valueMatch = false;
            }
        });
        if (arrayMatches == arrays.length) {
            results.push(fval);
        }
        arrayMatches = 0;
    });
    return results;
}

// if elem in first arr in succeding arrays, push elem to results
// check if match found in prev arrays, before last
// if match found in prev arrays and match found in last, push elem to results


// returns shared values
console.log(intersection([1, 2], [4, 2], [2, 1])); // [2]

console.log(intersection([1, 2, 3], [101, 2, 1, 10, 3], [2, 1, 3])); // [1, 2, 3]
console.log(intersection([1, 2, 3], [101, 2, 1, 10], [2, 1], [1, 3, 3, 2])); //[1, 2]
