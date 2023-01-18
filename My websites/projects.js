// Declare three locations where 3 ships are located as 3, 4, and 5.
let location1 = 3;
let location2 = 4;
let location3 = 5;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false){
    guess = prompt("Ready, aim, fire! (Enter a number 0-6):");
    if (guess < 0 || guess > 6){
        alert("Please enter a valid cell number!");
    }else{
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3){
            hits = hits + 1;
            if (hits ==3){
                isSunk = true;
                alert("You sank my battleship!");
            }else{
                alert("Miss!");
            }
        }

    }
}