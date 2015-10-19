function guessGifts(wishlist, presents) {

    return wishlist.filter(function(x) {
    	// if true then it returns obj, which we then get the val name
        return presents.some(function(y) {

        	// return true if there is match, else false
            return x.size == y.size && x.clatters == y.clatters && x.weight == y.weight;
        });

    }).map(function(x) {
        return x.name;
    });
}


// function guessGifts(wishlist, presents) {
//     var wildGuess = [];

//     presents.forEach(function(item) {

//         wishlist.forEach(function(wish) {

//             if (wish.size === item.size && wish.clatters === item.clatters && wish.weight === item.weight && wildGuess.indexOf(wish.name) === -1) {
//                 wildGuess.push(wish.name);
//             }

//         });
//     });
//     return wildGuess;
// }


var wishlist = [{
    name: "Mini Puzzle",
    size: "small",
    clatters: "yes",
    weight: "light"
}, {
    name: "Toy Car",
    size: "medium",
    clatters: "a bit",
    weight: "medium"
}, {
    name: "Card Game",
    size: "small",
    clatters: "no",
    weight: "light"
}];

var presents = [{
    size: "medium",
    clatters: "a bit",
    weight: "medium"
}, {
    size: "small",
    clatters: "yes",
    weight: "light"
}];

console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]
