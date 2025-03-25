
// Added Breakpoints, Spacing

const colors = ["red", "blue", "green"]; // creartes array of three colors

document.getElementById("add").addEventListener("click", function(e){ //changed to click from onlclick
console.log('clicked')
    const subItem = createSubItem(); //removed the e

    document.getElementById("list").appendChild(subItem);
});

function createDropDown(){

    const dropDown = document.createElement("select"); // creates a select dropdown

    for (let i = 0; i < colors.length; i++){ // added .length due to colors being an array

        const option = document.createElement("option") 

        option.innerHTML = colors[i];

        option.value = colors[i];

        dropDown.append(option);
    }

    dropDown.addEventListener("change", function(e){ // changed from onchange to change

        e.target.parentElement.style.backgroundColor = e.target.value; // added .style 

    });
    return dropDown;
}

function createSubItem(e){

    const subItem = document.createElement("div");

    var subItemValue = document.getElementById("input");

    subItem.textContent = subItemValue.value; // added .value to get the typed text by the user

    const dropDown = createDropDown();

    subItem.appendChild(dropDown); // adds dropdown inside the new item

    subItem.setAttribute("class", "subItem");

    return subItem;
}


