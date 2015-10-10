function difference(arr, exArr) {
    var result = [];
    var match = false;

    arr.forEach(function(val) {
        exArr.forEach(function(xval) {
            if (val === xval) match = true;
        });
        if (match === false) {
            result.push(val);
        }
        match = false;
    });
    return result;
}
// for each val in arr
// for each xval in exArr
// if val == xval, return true
// else return false
// if true, push(val) 

// tests //
console.log(difference([1, 2, 3], [4, 2])); //[1, 3]
