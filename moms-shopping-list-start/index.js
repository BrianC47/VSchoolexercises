// const form = document.getElementById("add-todo");
// const input = document.getElementById("title");
// const list = document.getElementById("list");

// form.addEventListener("submit", function(event) { //added event listener to the form
//     event.preventDefault(); // stop the page from refreshing

//     const textBox = input.value.trim(); // .value grabs the text , trim removes extra spaces
//     if (textBox === "") return;
    
//     // Create list item
//     const li = document.createElement("li"); 

//     // Create the div
//     const newDiv = document.createElement("div")  
//     newDiv.textContent = textBox;     // set textcontent to typed text inn textbox

//     // Edit Button
//     const editButton = document.createElement("button")
//     editButton.textContent = "edit";
//     editButton.addEventListener("click", () => {
//         list.removeChild(li);
//         input.value = "Type new item then click submit";
//     })


//     // Delete button

//     const deleteButton = document.createElement("button") // create new button
//     deleteButton.textContent = "X"; // Button says Delete
//     deleteButton.addEventListener("click", () =>{
//         list.removeChild(li); 
    
//     });

// // Append new items to the list
// li.appendChild(newDiv);

// li.appendChild(editButton);

// li.appendChild(deleteButton);

// list.appendChild(li);

// editButton.style.marginRight = "5px";

// input.value = ""; // clears input box after submit is clicked

//     console.log('clicked');
// });




// Assessment

// function isOldEnoughToWatchMadMax(age){
//     if (age >= 18){
//          return true;
//     } else {
//         return false;
//     }
// }


// console.log(isOldEnoughToWatchMadMax(19)); // True
// console.log(isOldEnoughToWatchMadMax(15)); // False


// Ternary Operator 