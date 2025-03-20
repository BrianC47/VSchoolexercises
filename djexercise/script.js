const square = document.querySelector('hr')

square.addEventListener('dblclick', function (){ // Double Click
    this.style.backgroundColor = 'green';
    this.preventDefault();
})

square.addEventListener('mouseover', function (){ // Mouse hover
    this.style.backgroundColor = 'blue';
})

square.addEventListener('mousedown', function (){ // Mouse is held down
    this.style.backgroundColor = 'red';
})

square.addEventListener('mouseup', function (){ // Mouse is let go over the square
    this.style.backgroundColor = 'yellow';
})

document.addEventListener('wheel', function (){ //
    square.style.backgroundColor = 'orange';
})


window.addEventListener('keydown', function(Event) { // Tells the window to lookout for the keydown event

    switch(Event.key.toLowerCase()) { // switch statements waits for the specific key to be pressed

        case 'g':
            square.style.backgroundColor = 'green';
            break;

            case 'b':
                square.style.backgroundColor = 'blue';
                break;

                case 'y':
                    square.style.backgroundColor = 'yellow';
                    break;

                    case 'r':
                        square.style.backgroundColor = 'red';
                        break;

                        case 'o':
                            square.style.backgroundColor = 'orange';
                            break;
            
        default:
            console.log('Incorrect key pressed');
            
    }

});
