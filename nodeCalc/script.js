// load the readlineSync package

const readlineSync = require('readline-sync');

// Define calculator functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) { // if b =  zero return message
    return "Error: Can't divide by zero";
  }
  return a / b;
}

// Ask user for operation
const operator = readlineSync.keyIn('Do you want to (a)dd, (s)ubtract, (d)ivide, or (m)ultiply? ', {limit: 'asdm'});
// keyIn waits for a single character key input from the user
// limit: 'adsm"  makes sure user can only press one of the letters




// Ask user for two numbers
// parseFloat() converts the string into a decimal number
const num1 = parseFloat(readlineSync.question('Enter the first number: '));
const num2 = parseFloat(readlineSync.question('Enter the second number: '));

// Perform selected operation
let result;

switch (operator) {
  case 'a':
    result = add(num1, num2);
    break;
  case 's':
    result = subtract(num1, num2);
    break;
  case 'm':
    result = multiply(num1, num2);
    break;
  case 'd':
    result = divide(num1, num2);
    break;
  default:
    result = "Invalid operator";
    break;
}

console.log(`The result is: ${result}`);




// Define a function named value_limit that restricts a value within a specified range.
// function value_limit(val, min, max) {
//     // If val is less than min, return min; otherwise, if val is greater than max, return max; otherwise, return val.
//     return val < min ? min : (val > max ? max : val);
//   }
// console.log(value_limit(7, 1, 12)); would be 7;




// const readlineSync = require('readline-sync');

// const input = readlineSync.keyIn('Enter your choice (A, B, or C): ', { limit: /A|B|C/ });

// console.log(`You entered: ${input}`);

// This code will prompt the user to enter a choice and only 
// accept 'A', 'B', or 'C' as valid inputs. If the user enters 
// anything else, the prompt will continue to reappear until a valid 
// input is provided.