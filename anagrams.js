////////////////
/// Anagrams ///
////////////////

function anagrams(target, words) {

    // returns words that pass test
    return words.filter(function(word) {

        // convert the words into an array of letters
        var targetArr = target.split('');
        var wordArr = word.split('');

        // test is that each letter in target has to match each letter in word
        return wordArr.every(function(letter, index) {
            // indexOf checks to see if the letter from word is in targetArr. if the letter is in word then we know it matched and we remove that word from target Arr to account to duplicate matches
            // matching each letter only once and removing it. 
            var match = targetArr.indexOf(letter);
            if (match !== -1) {
                targetArr.splice(match, 1);
                return true;
            }
        });
    });
}

// tests //

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
    // => ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // => ['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']))
    // => []

// interesting solutions //

function anagrams(word, words) {

    word = word.split('').sort().join('');

    return words.filter(function(v) {
    	
        return word == v.split('').sort().join('');
    });
}
