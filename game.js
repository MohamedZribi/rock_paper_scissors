
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
    
    playerSelection.toLowerCase() /* Making the user input case insensetive */

    /* When the player plays rock */
    switch (playerSelection == "rock") {
        case computerSelection == "Rock": 
            return "It's a tie, play again"
            break

        case computerSelection == "paper":
            computer++
            return "You Lose! Paper beats Rock"
            break
            
        case computerSelection == "scissors": 
            player++
            return "You win! Rock beats Scissors"
    } 


    }





const playerSelection = (prompt("", "Choose your move!")).toLowerCase();
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));


  
console.log(playRound(playerSelection, computerSelection));

// function game(playRound)


// for (let i = 0; i < 5; i++) {
//     playRound(playerSelection, computerSelection);
//     game(playRound);
//  }
