// // function largestNum(arr) {
// //     if (arr.length === 0) return undefined; // handle empty array
// //     let max = arr[0]; // start with the first number
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] > max) {
// //             max = arr[i]; // update max if current number is greater
// //         }
// //     }
// //     return max;
// // }

// // // Test Cases
// // console.log(largestNum([6, 900, 3000, 3]));        // => 3000
// // console.log(largestNum([3, 51, 7, 8, 43]));        // => 51
// // console.log(largestNum([-13, 40, 3, 0, -198, 42])); // => 42

// // FizzBuzz

// // for (i = 0; i<= 100; i++){
// //     if (i % 3 === 0 && i % 5 === 0){
// //         console.log(i + " FizzBuzz")
// //     }
// //     else if (i % 3 === 0){
// //         console.log(i + " Fizz")
// //     }
// // else if (i % 5 === 0){
// //     console.log(i + " Buzz")
// // }
// // else (
// //     console.log(i)
// // )
// //     }
    
// // If it's divisible by both 3 and 5, print "FizzBuzz".

// // If it's divisible by only 3, print "Fizz".

// // If it's divisible by only 5, print "Buzz".

// // If it’s divisible by neither, print the number itself.

// // function countChar(str, char){
// //     str = str.toLowerCase();
// //     char = char.toLowerCase();

// //     let count = 0;
// //     for(let i = 0; i < str.length; i++){
// //         if (str[i] === char){
// //             count++;
// //             console.log(i);
// //         }
        
// //     }
// //     return count;
// // }

// // console.log(countChar("Hello Eric", "e"));



// function filterRange(min,max,array){
//     return array.filter(num => num >= min && num <= max)
// }

// let numbers1 = [1,5,10,15,20,25,30];
// let numbersResult = filterRange(10,30, numbers1);

// console.log(numbersResult);


// // 1,5,10,15,20,25  (5,20, numbers1)

//    // Basic syntax for setTimeout
//    setTimeout(functionToExecute, timeInMilliseconds);
 
//    // Basic syntax for setInterval
//    setInterval(functionToExecute, timeInMilliseconds);

//   // This will show an alert after 2 seconds
//   setTimeout(function() {
//     alert("Hello from the future!");
//  }, 2000);