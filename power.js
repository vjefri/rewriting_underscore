///////////
// POWER //
///////////

function power(array) {

	// for every element in the array, at the beginning p == [[]] & e == 1
    return array.reduce(function(p, e) {
    	// the inner function will execute first, they always do. 
    	// they always execute inner to outer, and if higherchy is equal, left to right. So map executes first. 
        return p.concat(p.map(function(sub) {
        	// so if we look at map we can see that we are going through each element in p, which at the beginning is []. So we take [] and we concat the element e. [] + 1 automatically casts the element into an array. We can do sub.concat(e) or sub.concat([e]), they are both the same. We return [1] and concat that to [[]]. So we have [[], [1]]. Now we are in element 2. Sub is now [] and [1]. So 2 will concat to [] first and [1] second. Giving us [2] and [1, 2]. And you repeat the process to get the final solution. 
            return sub.concat(e);

        }));

    }, [
        []
    ]);
}


console.log(power([1, 2, 3]));
// => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

function power(s) {

  var power = [[]]; // makes sure the first element is [  [],  ]

  // for each element in array, which is 1, 2, 3
  s.forEach(function(element) {

  	// for each element in power array, power will keep growing in size once we start concatinating more elems unto it. The parts will start off as [] but with each itteration of elements will grow to [ [], [1] ] ... so now when you reach element 2, we have to go over two parts [] and [1]. The 2 will concat to [] + 2 == [2] and [1] + [2] == [1, 2]. Then we move unto element 3. It will do the following: [] + 3 == [3]... [1] + [3] == [1, 3]... [2] + [3] == [2, 3]... [1, 2] + [3] == [1, 2, 3]. And that is how this works. 
    power.forEach(function(part) {

      power.push(part.concat(element));

    });

  });

  return power;

}