// From first (console.log) Version
// function game () {
//     let userScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         let computerSelection = getComputerChoice();
//         let playerSelection = capitalize(prompt("Your choice?","Rock"));

//         roundResult = playRound(playerSelection,computerSelection);

//         if (roundResult === "win") {
//             userScore += 1;
//         } else if (roundResult === "loose") {
//             computerScore += 1;
//         }
        
//         let message = 
//         `You chose ${playerSelection}
//         Computer chose ${computerSelection}
//         Score - You: ${userScore}, Computer: ${computerScore}`;
//         console.log(message)
//     }
    
//     if (userScore > computerScore) {
//         console.log("You win the game!")
//     } else if (userScore < computerScore) {
//         console.log("You loose this game!")
//     } else {
//         console.log("This game is a tie!")
//     }
// }

// game ();


// Revisiting the project (Adding UI)

// Setting variables
let userScore = 0;
let computerScore = 0;
let gameCounter = 0;

// Getting elements

const buttons = document.querySelectorAll(".btn");
const resultsPart = document.querySelector("#results");
const headline = document.querySelector("#choose");









