function compact(arr) {
    var results = [];
    arr.forEach(function(val) {
        if (val != '' && val != "" && val != false && val != null && val != undefined && val != NaN) {
            results.push(val);
        }
    });
    return results;
}

// tests //

console.log(compact([0, 1, false, 2, '', 3])); // [1, 2, 3]
