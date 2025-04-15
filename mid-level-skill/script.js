// Challenge 1

function changeTextContent(elementID, newText){

   let newElement = document.getElementById(elementID);

     newElement.textContent = newText;
    
}

changeTextContent('heading', 'Welcome to my website!');

changeTextContent('changeButton', 'this is a simple paragraph!'); //Will get an error if ID does not exists


/* ******************************* */

/* Challenge 2 */


 
//  document.addEventListener("click", function() { 
//     changeTextContent('heading', 'The heading has been changed!');

    let button = document.getElementById("changeButton");
    if (button) {
        button.addEventListener("click", function() { // If button has been clicked 
            changeTextContent("heading", "Text has been changed!"); // change the heading to reflect this 
        });
    } else {
        console.error("Button element not found"); //if there is no button log error message
    };