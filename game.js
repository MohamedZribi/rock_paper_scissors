/* The getComputerChoice() will return a random choice */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
};




/* This function plays one round of the game and records the score in the score variable */
function playRound(playerSelection, computerSelection) {
    
    let result = "";

    /* It's a tie */
    if ( ( playerSelection === "rock" && computerSelection === "rock" ) ||
         ( playerSelection === "paper"  && computerSelection === "paper" ) ||
         ( playerSelection ==="scissors" && computerSelection === "scissors" ) ) { result = "It's a tie, play again" }


    /* PLayer lose */
    else if ( ( playerSelection === "rock" && computerSelection === "paper" ) ||
              ( playerSelection === "paper" && computerSelection == "scissors") ||
              ( playerSelection === "scissors" && computerSelection == "paper") ) { result = `You lose! ${computerSelection} beats ${playerSelection}` }

    /* Player wins */
    else if ( ( playerSelection === "rock" && computerSelection === "scissors") ||
              ( playerSelection === "paper" && computerSelection === "rock") ||
              ( playerSelection === "scissors" && computerSelection === "paper") ) { result = `You win! ${playerSelection} beats ${computerSelection}` }    
              
    
    return result

}






/* This function plays a game of 5 rounds and an extra round if it's a tie (until someone wins) */
function game(playRound) {

    /* Assigning the game score to a variable starting at 0 and the gameResult to undeclared */
    let score = 0;
    let gameResult = "undeclared";

    for ( let i = 0; i < 5; i++) { /* For each round */

        /* New choices for both the computer and the player for each round */
        const playerSelection = (prompt("", "Choose your move!")).toLowerCase(); /* Making the user input case insensetive.... we need to ask the player to enter a valid option ifhis entry isn't in the choices array = ["rock", "paper", "scissors"]; */ 
        const computerSelection = getComputerChoice();
        console.log(`The computer played: ${computerSelection}`)          /* Logging what the computer chose for testing purposes */ 

        const oneRound = (playRound(playerSelection, computerSelection));

        alert(oneRound)

        if ( oneRound === "It's a tie, play again") {score = score;}
        else if ( oneRound === `You lose! ${computerSelection} beats ${playerSelection}`) { score--; }
        else if ( oneRound === `You win! ${playerSelection} beats ${computerSelection}`) { score++; }
        console.log(score)
    }

    if (score < 1) { gameResult = "The computer wins" }
    else if (score > 1) { gameResult = "You WIN!" }

    /* Will have to add the extra round logic in the else statement later*/
    else {gameResult = "It's a tie"}  

    return gameResult



}





// console.log(game(playRound))

game(playRound)

