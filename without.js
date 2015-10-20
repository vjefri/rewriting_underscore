/////////////////////
////// Without //////
/////////////////////

function without() {
    var args = [].slice.call(arguments);

    var array = args[0];
    var targets = args.slice(1);

    // the array you want to filter should be at the left of filter. filter will return any values that match the predicate you provide. indexOf can be used to see if any value matches the target array. you can return the values based on matches or no matches. in this case we want no matches

    return array.filter(function(val) {
        return targets.indexOf(val) == -1;
        // for every value in arrays, check to see if it is NOT in the targets array. if it is NOT in the targets array, return val
    });
}


console.log(without([1, 2, 1, 0, 3, 1, 4], 0, 1));

// => [2, 3, 4]
