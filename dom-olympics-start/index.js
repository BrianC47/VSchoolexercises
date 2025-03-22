const greeting = document.getElementById("header");

greeting.innerHTML = "JavaScript Made This!!";

greeting.style.textAlign = "center";
greeting.style.fontWeight = "bold";

const leftMessage = document.querySelector(".left");
const rightMessage = document.querySelector(".right");

leftMessage.innerHTML = "Do you play any video games";
rightMessage.innerHTML = " Yes I play mainly play shooters";

let messages = document.querySelectorAll(".message.left");
let secondMessage = messages[1]; // Selects the second one (zero-based index)
