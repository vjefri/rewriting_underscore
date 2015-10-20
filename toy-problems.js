/* Make sure you do these last */



// Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

function plusOneSum(arr) {
    return arr.reduce(function(total, val) {
        return total + val + 1;
    }, 0);
}

// console.log(plusOneSum([1, 2, 3, 4])); // 14


/*

Write a function that accepts a multi dimensional array and returns a flattened version.

*/
function flatten(arr) {
    return arr.reduce(function(acc, elem) {
        if (Array.isArray(elem)) return acc.concat(flatten(elem));
        else return acc.concat(elem);
    }, []);
}

// if val, then you want to add it to result
// if array, then you want to iterrate over its values


// console.log(flatten([1, 2, [3, [4], 5, 6], 7])); // [1, 2, 3, 4, 5, 6, 7]

/*

Given an array 
[a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to 
[a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
function convertArray(arr) {
    var n = arr.length / 3;

    function getIndex(current) {
        return (current % 3) * n + (current / 3);
    }

    var swap;
    var tmp;
    for (var i = 0; i < arr.length; i++) {
        swap = Math.floor(getIndex(i));
        while (swap < i) {
            swap = Math.floor(getIndex(swap));
        }
        tmp = arr[i];
        arr[i] = arr[swap];
        arr[swap] = tmp;
    }
    return arr;
}

// var arr = [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN];

// console.log(convertArray(arr));

// I don't understand this question..

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/

var arr1 = [1, 2, 3, 4, 5];

var randomArr = function(arr1) {
    var arr = arr1.slice();

    for (var i = arr.length - 1; i > 0; i--) {
        var ranIndex = Math.floor(Math.random() * (i + 1));

        var temp = arr[i];
        arr[i] = arr[ranIndex];
        arr[ranIndex] = temp;
    }
    var ranIndex = Math.floor(Math.random() * arr.length);
    arr.splice(ranIndex, 1);

    return arr;
}

var arr2 = randomArr(arr1);

function difference(A, B) {
    var map = {};

    A.forEach(function(val) {
        map[val] = 1;
    });

    B.forEach(function(val) {
        map[val]++;
    });

    for (var key in map) {
        if (map[key] === 1) return key;
    }
}


console.log(difference(arr1, arr2));

/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]

longestWords("I gave a present to my parents") // ["present", "parents"]

longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/

// make everything lowercase and split the string into an array of words
// remove duplicate words
// get the max length of the largest word
// make an array with words of the max length

function longestWords(str) {
    var words = str.toLowerCase().split(' ')
    			.filter(function(word, i, allWords) {
       				 return i == allWords.indexOf(word);
    			}); // learn this trick to remove duplicate words

    var length = words.reduce(function (a, b) { return a.length > b.length ? a : b; }).length; // learn this trick as well

    var result = words.filter(function(val) {
    	return val.length === length;
    })
    return result;
}

// return longest words from sentence
// should not return duplicate words
// console.log(longestWords("You are just an old antidisestablishmentarian"))
//     // ["antidisestablishmentarian"]

// console.log(longestWords("I gave a present to my parents"))
//     // ["present", "parents"]

// console.log(longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"))

// ["buffalo"] or ["Buffalo"]

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function multiples() {
	var sum = 0;
	for (var i = 1; i < 1000; i++) {
		if (i % 3 == 0 || i % 5 == 0) sum += i;
	}
	return sum;
}

// console.log(multiples());

// finding the multiples of 3 or 5
// how do we know if a number is a multiple of 3, or 5

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

function removeDup(str) {
	var words = str.toLowerCase().split('')
    			.filter(function(word, i, allWords) {
       				 return i == allWords.indexOf(word);
    			});
    			return words.join('');
}

// console.log(removeDup('tree traversal'));

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum() {
	var args = [].slice.call(arguments);
	var arg1 = args[0];
	if (args.length == 2) return args[0] + args[1];
	else return function(args) {
		return args + arg1;
	}
}

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5