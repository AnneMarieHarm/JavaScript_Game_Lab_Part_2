"use strict";

// startGame function 
function startGame() {
    // a. Prompt the user if they would like to play  
    let play = prompt("Do you want to play the game?");
    // and if they say yes...
    if (play === "yes") {
        // i. Allow the user to enter the character’s name.  
        let userName = prompt("Enter your name.");
        startCombat(play, userName);
    } else {
        console.log("See ya later, alligator.");
    }
}

// getDamage function. 
function getDmg() {
    // This will return a number between one and ﬁve that will be used to decide 
    // how much damage the user and Grant will deal during each round. 
    return Math.floor(Math.random() * 5) + 1;
}

// startCombat  function. 
// When executed, this will run the entire loop you created in Part One.  
function startCombat(play, userName) {
    let userHealth = 40;
    let grantHealth = 10;
    let userWins = 0;

    // Additional Changes: Each iteration of the loop will include a prompt that will ask the user if they would like to “attack” or “quit”.  
    while (play) {
        let choice = prompt("Would you like to attack or quit?")
        // If the user decides to quit, ﬁgure out a way to exit out of the loop and function.
        if (choice === "quit") {
            console.log(`${userName} decided to quit the game`);
            break;
        }
        // If the user decides to attack, adjust the character’s health points and Grant’s health  points based on the getDamage function.
        if (choice === "attack") {
            grantHealth -= getDmg();
            userHealth -= getDmg();
            console.log(`${userName} was attacked. ${userName} has ${userHealth} health left.`);
            console.log(`Grant was attacked. Grant has ${grantHealth} health left.`);
        }

        if (grantHealth <= 0) {
            userWins++;
            grantHealth = 10;
            if (userWins === 3) {
                console.log(`${userName} is victorious!`);
                break;
            } else {
                console.log(`${userName} has beaten Grant. ${userName} must win ${3 - userWins} more time(s).`);
            }
        }
        if (userHealth <= 0) {
            console.log("Grant beat you. Sucks to suck.");
            break;
        }
    }
    return;
};
startGame();



