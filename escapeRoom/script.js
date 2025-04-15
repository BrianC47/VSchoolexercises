// // Game Start
 
// // Tell the user their options:
 
// // 1. Find the key
// // 2. Put hand in hole
// // 3. Open the door
    
    
// // They can't open the door unless they find the key first.
 
// // They die if they put their hand in the hole.


const readline = require("readline-sync");

let hasKey = false;
let isAlive = true;
let hasEscaped = false;

const name = readline.question("What is your name? ");
console.log(`Hello ${name}, welcome to the escape room!`);

while (isAlive && !hasEscaped) { // loop runs as long as the player is alive and hasn't escaped
  console.log("\nWhat would you like to do?");
  console.log("1. Find the key");
  console.log("2. Put hand in the hole");
  console.log("3. Open the door");

  let option = readline.question("Enter 1, 2, or 3: ");

  switch (option) {
    case "1":
      if (!hasKey) {
        hasKey = true;
        console.log("You found the key!");
      } else {
        console.log("You already have the key.");
      }
      break;

    case "2":
      console.log("You put your hand in the hole... and died.");
      isAlive = false;
      break;

    case "3":
      if (hasKey) {
        console.log("You used the key and opened the door. You're free!");
        hasEscaped = true;
      } else {
        console.log("The door is locked. You need a key.");
      }
      break;

    default:
      console.log("Invalid option. Please enter 1, 2, or 3.");
      break;
  }
}

if (!isAlive) {
  console.log("Game over.");
} else if (hasEscaped) {
  console.log("Congratulations, you escaped!");
}
