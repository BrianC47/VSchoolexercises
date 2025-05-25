const celsiusTemps = [0,15,30,45]
// [10,25,40,55]

const addTen = celsiusTemps.map(function(number){
    return number + 10;
})

console.log(addTen);
console.log(celsiusTemps);

// creates a new array populated with the results of calling a 
// provided function on every element in the calling array.

// Parameters
// callbackFn
// A function to execute for each element in the array. Its return value is added as a single element in the new array. The function is called with the following arguments:

// The map() method is an iterative method.
//  It calls a provided callbackFn function once for each element 
//  in an array and constructs a new array from the results. 