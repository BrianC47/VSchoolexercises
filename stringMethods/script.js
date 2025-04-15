// Take a string as parameter

var greetings = "Hello";

function capitalizeandLowercase(greetings){
 return greetings.toUpperCase() + greetings.toLowerCase();


}

console.log(capitalizeandLowercase(greetings));

// Write a function that uses slice() to return the first half of the string


function halfString(str){

    let halfLengthOfString = Math.floor(str.length / 2); // Take the length of the string and half it, Math.floor() rounds a number down to the nearest integer

    return str.slice(0, halfLengthOfString);
}

console.log(halfString("Brianax"));

// First half is capitalized , second half is lowercased

function capitalizeAndLowercase(str) {
    let halfLength = Math.floor(str.length / 2);
    let firstHalf = str.slice(0, halfLength).toUpperCase();
    let secondHalf = str.slice(halfLength).toLowerCase();
    return firstHalf + secondHalf;
  }
  
  // Examples
  console.log(capitalizeAndLowercase("Hello"));       // => "HEllo"
  console.log(capitalizeAndLowercase("Hello World")); // => "HELLO world"
  

