// Preliminaries

// Print numbers 0 to 9 to the console

for (i = 0 ;i < 10;i++){
    console.log(i);
}

// Print numbers 9 to 0

for (i = 9; i >= 0; i--){
    console.log(i);
}

// Write a for loop that prints these fruits to the console.

const fruit = ["banana", "orange","apple", "kiwi"];

for(i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}


// Bronze Medal

// Push 0 to 9 to a array
const numbers = [];

for(i = 0; i < 10; i++){
    numbers.push(i);
    
}
console.log(numbers);

// Push every other fruit to an array

const moreFruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const result = []; // Create empty array

for (let i = 0; i < moreFruit.length; i += 2) { // 0 2,4
  result.push(moreFruit[i]);
}

console.log(result); // ["banana", "apple", "pear"]

// Silver Medal

// Print out all the names of the array

const peopleArray = [
    { name: "Harrison Ford", occupation: "Actor" },
    { name: "Justin Bieber", occupation: "Singer" },
    { name: "Vladimir Putin", occupation: "Politician" },
    { name: "Oprah", occupation: "Entertainer" }
]

for(i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
}

// Push names into names array and occupation array

const names = [];
const occupations = []

for(i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
    console.log(names, occupations);
    

}


// 3 rows of 000

const grid = [];

for(i = 0; i < 3; i++){
    const row = [];
    for (j = 0; j < 3; j++){
        row.push(0);
    }
    grid.push(row);
}
console.log(grid);


// first row 0 then 1, then 2


const grid2 = [];

for (let i = 0; i < 3; i++) {
  const row = [];
  for (let j = 0; j < 3; j++) {
    row.push(i); // Use outer loop index to push i 3 times then increment
  }
  grid2.push(row);
}

console.log(grid2);




// 0,1,2
// 0,1,2

const grid3 = [];

for (let i = 0; i < 3; i++) {
  const row = [];
  for (let j = 0; j < 3; j++) {
    row.push(j); // Use outer loop index to push j 3 times then increment
  }
  grid3.push(row);
}

console.log(grid3);

// numbers to an x

const grid4 = [ [1,2,3], [1,2,3], [1,2,3] ];

for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        grid4[i][j] = "X";

    }

}
console.log(grid4);