// function rot13(message) {
//     var alphabet = "abcdefghijklmnopqrstuvwxyz";
//     var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     var letters = message.split('');

//     console.log(letters);

//     return letters.map(function(val) {
//         function upperCase() {
//             var pos = upperAlphabet.indexOf(val);
//             var cipherPos = pos + 13;
//             if (cipherPos > 25) {
//                 cipherPos = cipherPos - 26;
//             }
//             return upperAlphabet[cipherPos];
//         }

//         function lowerCase(alphabet) {
//             var pos = alphabet.indexOf(val);
//             var cipherPos = pos + 13;
//             if (cipherPos > 25) {
//                 cipherPos = cipherPos - 26;
//             }
//             return alphabet[cipherPos];
//         }

//         while (/[A-Z]/gi.test(val)) {
//             if (val === val.toUpperCase()) return upperCase(upperAlphabet);
//             else if (val === val.toLowerCase()) return lowerCase(alphabet);
//         }  
//         return val;

//     }).join('')
// }


var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
var cipher   = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";

function rot13(message){
  return message.split('').map(function(c) {
    var i = alphabet.indexOf(c);
    if (i < 0) {
      // not in alphabet, return char
      return c;
    }
    
    return cipher[i];
  }).join('');
}

console.log(rot13("xtbs79o1or")); // kgof79b1be
