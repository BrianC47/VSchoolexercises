// Write a function that takes two arrays as parameters

var people = ["Jon", "Jacob", "Helmet", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people, alphabet) {
    var result = []; // Store the final output 

    // Split alphabet into an array
    var alphabetArray = alphabet.toUpperCase().split(""); // Turns each letter uppercase in the array, Split turns into an array of individual letters

    for (var i = 0; i < people.length; i++) { // Outer loop goes through each person one by one
        result.push(people[i] + ":"); // Add their name plus a colon to result array

        for (var j = 0; j < alphabetArray.length; j++) { // Inner loop
            result.push(alphabetArray[j]); // loop through entire alphabet for each person
        }
    }

    return result;
}

console.log(forception(people, alphabet));
