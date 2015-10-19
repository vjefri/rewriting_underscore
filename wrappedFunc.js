// create a wrap function as part of the Function object
// the function takes in a function as input

Function.prototype.wrap = function(fn) {
    return function() {
        // we get the arguments from the function that was passed in and convert them into an array of arguments. 
        var args = Array.prototype.slice.call(arguments);

        // we add the speak function to the beginning of the args array
        args.unshift(this); // this points to speak, the func left of the dot

        // args looks like this: [ [Function: speak], 'Mary', 'Kate' ]

        return fn.apply(this, args);

    }.bind(this);
};

function speak(name) {
    return "Hello " + name;
}

speak = speak.wrap(function(original, yourName, myName) {
    greeting = original(yourName);
    return greeting + ", my name is " + myName;
})

var greeting = speak("Mary", "Kate");

console.log(greeting);


Function.prototype.wrap = function(fn) {
  var orig = this;
  return function(){
    Array.prototype.unshift.call(arguments, orig)
    return fn.apply(null, arguments);
  }
}