function zip() {
    var args = Array.prototype.slice.call(arguments);
    var length = args[1].length;
    var results = []
    var temp = [];

    // outer loop will keep track of indexes within each arr
    for (var i = 0; i < length; i++) {
        args.forEach(function(arr) {
            temp.push(arr[i]);
        });
        results.push(temp);
        temp = [];
    }
    return results;
}

// groups elems by their indexes in their respective arrays
// loop over each array
// get the length of the array, outer loop


console.log(zip(['fred', 'barney'], [30, 40], [true, false]));
// [['fred', 30, true], ['barney', 40, false]]
