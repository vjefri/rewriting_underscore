function shuffle(array) {

    for (var currIndex = array.length - 1; currIndex > 0; currIndex--) {

        var ranIndex = Math.floor(Math.random() * (currIndex + 1));

        var temp = array[currIndex];
        array[currIndex] = array[ranIndex];
        array[ranIndex] = temp;
    }

    return array;
}

// loop through each val
// generate a random index number
// change the value with the random index value, switch

console.log(shuffle([1, 2, 3, 4]));
