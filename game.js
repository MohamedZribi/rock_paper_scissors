
/* The getComputerChoice() will return a random choice */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
};





/* I find myself in need to declare variables containing the two parties
    that are playing the game, why a variable you ask? well because I'll add scores to them throughout the game
    so the type would be integers */

let player = 0;
let computer = 0;



function playRound(playerSelection, computerSelection) {
    
    let result = "";
    playerSelection.toLowerCase() /* Making the user input case insensetive */

    /* we need to ask the player to enter a valid option if
       his entry isn't in the choices array = ["rock", "paper", "scissors"]; */


    /* It's a tie */
    if ( ( playerSelection === "rock" && computerSelection === "rock" ) ||
         ( playerSelection === "paper"  && computerSelection === "paper" ) ||
         ( playerSelection ==="scissors" && computerSelection === "scissors" ) ) { result = "It's a tie, play again" }


    /* PLayer lose */
    else if ( ( playerSelection === "rock" && computerSelection === "paper" ) ||
              ( playerSelection === "paper" && computerSelection == "scissors") ||
              ( playerSelection === "scissors" && computerSelection == "paper") ) {result = `You lose! ${computerSelection} beats ${playerSelection}` }

    /* Player wins */
    else if ( ( playerSelection === "rock" && computerSelection === "scissors") ||
              ( playerSelection === "paper" && computerSelection === "rock") ||
              ( playerSelection === "scissors" && computerSelection === "paper") ) { result = `You win! ${playerSelection} beats ${computerSelection}` }          

    return result

    }







const playerSelection = (prompt("", "Choose your move!"));
const computerSelection = getComputerChoice();


console.log(`The computer played: ${computerSelection}`)  
console.log(playRound(playerSelection, computerSelection));
