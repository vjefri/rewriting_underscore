(function() {
  'use strict';

  window._ = {};

  _.identity = function(val) {
    return val;
  };

  _.first = function(array, n) {
    if (n === undefined) return array[0]
    else return array.slice(0,n);
  };

  _.last = function(array, n) {
    if (n === undefined) return array[array.length - 1];
    else return array.slice(Math.max(0, array.length - n));
  };

  _.each = function(collection, callback) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        callback(collection[key], key, collection);
      }
    }
  };

  _.indexOf = function(array, target){
    var result = -1;
    _.each(array, function(value, index) {
      if (value === target && result === -1) {
        result = index;
      }
    });
    return result;
  };

  _.filter = function(collection, test) {
    // store results
    var results = [];
    // if item not in results then push item into results
    _.each(collection, function(value) {
      if (test(value)) results.push(value);
    });
    // return results
    return results;
  };

  _.reject = function(collection, test) {
    var result = [];
    return _.filter(collection, function(value){
      return !test(value);
    })
  };

  _.uniq = function(array) {
    var results = [];
    _.each(array, function(value) {
      if (_.indexOf(results, value) === -1) {
        results.push(value);
      }
    });
    return results;
  };

  _.map = function(collection, callback) {
    var results = [];
    _.each(collection, function(value) {
      results.push(callback(value));
    });
    return results;
  };

  _.pluck = function(collection, key) {
    return _.map(collection, function(obj) {
      return obj[key];
    });
  };

  _.reduce = function(collection, callback, accumulator) {
  	_.each(collection, function(item) {
  		if (accumulator === undefined) accumulator = item;
  		else accumulator = callback(accumulator, item);
  	});
  	return accumulator;
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // if array contains item return true
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, predicate) {
    predicate = predicate || _.identity;

    return _.reduce(collection, function(memo, value) {
      // if values so far are true and the current value is true
      // !! cast value into boolean, otherwise predicate(value) might return undefined
      // this will add to the next memo
      return !!predicate(value) && memo;
    }, true);
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, predicate) {
    predicate = predicate || _.identity;
    return _.reduce(collection, function(anyTrue, item){
      if(anyTrue) return true;
      return !!predicate(item);
    }, false);
  };


  /**
   * OBJECTS
   * ======= */
  _.extend = function(destObj) {
    _.each(arguments, function(sourceObj) {
  		_.each(sourceObj, function(value, key) {
  			destObj[key] = value;
  		});
  	});
  	return destObj;
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    _.each(arguments, function(source) {
      _.each(source, function(value, key) {
        // the only diffrence is the if statement
        if (obj[key] === undefined) {
          obj[key] = value;
        }
      });
    });
    return obj;
  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    var result;
    var wasRun = false;

      return function() {
        if (!wasRun) {
          wasRun = true;
          result = func();
        }
        else return result;
      };
  };

  // Memorize an expensive function's results by storing them. You may assume
  // that the function takes only one argument and that it is a primitive.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
      var obj = {};
      return function() {
          var args = JSON.stringify(arguments[0]);
          obj[args] = obj[args] || func.apply(this, arguments);
          return obj[args];
      };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
    // calling slice directly from prototype
    var args = Array.prototype.slice.call(arguments, 2);
    return setTimeout(function() {
      func.apply(this, args);
    }, wait);
  };

  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {
    var arrCopy = array.slice();
    var temp;
    var indexRange = array.length - 1;

    while (indexRange) {
      var ranIndex = Math.floor(Math.random() * indexRange);
      temp = arrCopy[indexRange];
      arrCopy[indexRange] = arrCopy[ranIndex];
      arrCopy[ranIndex] = temp;
      indexRange -= 1;
    }

    return arrCopy;
  };



  /**
   * EXTRA CREDIT
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {

  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {

  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]

  _.zip = function() {
    var max = 0;
    var result = new Array(max);

    _.each(arguments, function(arg) {
      max = Math.max(arg.length, max);
    });

    for (var i = 0; i < max; i++) {
      result[i] = _.pluck(arguments, i);
    }

    return result;
  };
  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array

  _.flatten = function(nestedArray, result) {
    return _.reduce(nestedArray, function(memo, val){
      return memo.concat(Array.isArray(val) ? _.flatten(val) : [val]);
    }, []);
  };
  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {

  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {

  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());
