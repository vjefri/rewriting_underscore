function flatten(arr, isDeep) {
    var result = [];
    var level = 1;
    // check if deep is true
    if (isDeep) flattenDeep(arr, result);
    else flattenSingle(arr, result, level);

    function flattenDeep(arr, result) {
        arr.forEach(function(val) {
            if (Array.isArray(val)) result = result.concat(flattenDeep(val, result));
            else result.push(val);
        });
    }

    function flattenSingle(arr, result, level) {
        arr.forEach(function(val) {
            if (Array.isArray(val) && level < 2) {
            	level++;
            	result = result.concat(flattenSingle(val, result, level));
            }
            else result.push(val);
        });
    }

    return result;
}
// for each elem
// if elem is array, call recursion on the current arr and concat value to result
// else push the value to result

console.log(flatten([1, [2, 3, [4]]], false));
// → [1, 2, 3, [4]]

// using `isDeep`
console.log(flatten([1, [2, 3, [4]]], true));
// → [1, 2, 3, 4]
