// function validParentheses(parens){
// 	var map = {
// 		"(": 0,
// 		")": 0
// 	};

// 	var arr = parens.split('');

// 	arr.forEach(function(val) {
// 		map[val] = map[val] + 1;
// 	});

// 	if (map['('] === map[')']) {
// 		/// first elem is open, last elem is closed
// 		if (arr[0] == "(" && arr[arr.length - 1] == ")") return true
// 		else return false; 
// 	}
// 	return false; 
// }

// function validParentheses(parens){
// 	// this makes it true or false. open is the counter, you want ti to be 0 to return true. 
//   return 0 == parens.split("").reduce(function (open, paren) {
//     if (open >= 0) {
//     	// executes the right side first
//       open += paren == '(' ? 1 : 0;
//       open -= paren == ')' ? 1 : 0;
//     }
//     return open;
//   }, 0);
// }

function validParentheses(parens){
  var indent = 0;
  
  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;    
    console.log(indent);
  }
  
  return (indent == 0);
}

console.log(validParentheses( "()" )) // => returns true 
console.log(validParentheses( ")(" )) // => returns false
console.log(validParentheses( ")(()))" )) // => returns false 
console.log(validParentheses( "(" )) // => returns false 
console.log(validParentheses( "(())((()())())" )) // => returns true 