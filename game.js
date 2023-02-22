// getComputerChoice() will return a random choice */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
};




// Initial score starting the game
let playerScore = 0;
let computerScore = 0;


// This is the main game function
function playRound(playerSelection, computerSelection) {
    
    let result = "";
    
    document.getElementById("computerSelection").innerHTML = `The computer chose ${computerSelection}!`
    document.getElementById("playerSelection").innerHTML = `You chose ${playerSelection}!`


    if ( ( playerSelection === "rock" && computerSelection === "rock" ) ||
         ( playerSelection === "paper"  && computerSelection === "paper" ) ||
         ( playerSelection ==="scissors" && computerSelection === "scissors" )) {
         
         result = "It's a tie, play again" }
         
    
    /* PLayer lose */
    else if ( ( playerSelection === "rock" && computerSelection === "paper" ) ||
            ( playerSelection === "paper" && computerSelection == "scissors") ||
            ( playerSelection === "scissors" && computerSelection == "rock") ) {
                
            result = `You lose! ${computerSelection} beats ${playerSelection}`, computerScore++ }

    /* Player wins */
    else if ( ( playerSelection === "rock" && computerSelection === "scissors") ||
              ( playerSelection === "paper" && computerSelection === "rock") ||
              ( playerSelection === "scissors" && computerSelection === "paper")) {
               
               result = `You win! ${playerSelection} beats ${computerSelection}`, playerScore++ }; 

    document.getElementById("playerScore").innerHTML = `Your score is ${playerScore}!`
    document.getElementById("computerScore").innerHTML = `The computer score  ${computerScore}!`



    if (playerScore == 5 ) {
        console.log("PLayer won") // for delete later
        document.getElementById("winner").innerHTML = "congrats! You WON!";
        playerScore = 0; computerScore = 0 ;

    }

    else if(computerScore === 5) {
        console.log("Computer won") // for delete later
        document.getElementById("winner").innerHTML = "Looks like the machine beat you this time :-)";
        playerScore = 0; computerScore = 0 ;
    };

    return result;
   
}



// ADD event listeners for the buttons to get the playerSelection
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "rock"
    document.getElementById("result").innerHTML = playRound(playerSelection, getComputerChoice())
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "paper"
    document.getElementById("result").innerHTML = playRound(playerSelection, getComputerChoice())

});

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    playerSelection = "scissors"
    document.getElementById("result").innerHTML = playRound(playerSelection, getComputerChoice())

});




