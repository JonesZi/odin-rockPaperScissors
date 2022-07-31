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

// Functions
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function determineWinner(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")){
        return "win";
    } else {
        return "loose";
    }
}

function playRound (playerSelection, computerSelection) {
    let result = determineWinner(playerSelection,computerSelection);
    if (result === "win") {
        userScore += 1;
    } else if (result === "loose") {
        computerScore += 1;
    }
};

function displayLog (userScore,computerScore, playerSelection, computerSelection, gameCounter) {
    let string = `Game ${gameCounter} out of 5! 
    You chose ${playerSelection}.
    Computer chose ${computerSelection}.
    Current Score - 
    You: ${userScore}
    Computer: ${computerScore}.`;
    let para = document.createElement("p");
    para.textContent = string;
    resultsPart.appendChild(para);
}

function isGameFinished (gameCounter) {
    if (gameCounter < 5) {
        return false; 
    } else {
        return true;
    };
};

function endGame (userScore, computerScore) {
    //remove buttons and headline
    buttons.forEach(e => e.remove());
    headline.remove();
    //Winner message    
    const end = document.createElement("h1");
    if (userScore > computerScore) {
        end.textContent = `You win the game! Final Score - You: ${userScore}, Computer: ${computerScore}`;
    } else if (userScore < computerScore) {
        end.textContent = `You loose this game! Final Score - You: ${userScore}, Computer: ${computerScore}`;
    } else {
        end.textContent = `This game is a tie! Final Score - You: ${userScore}, Computer: ${computerScore}`;
    }
    resultsPart.appendChild(end);
}

function playGame (e) {
    if (!e.target.classList.contains("btn")) return;
    let playerSelection = e.target.textContent;
    let computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    gameCounter += 1;
    displayLog(userScore,computerScore,playerSelection,computerSelection,gameCounter);
    if (isGameFinished(gameCounter)) {
        endGame(userScore,computerScore);
    };
}


//Event Listeners

window.addEventListener("click", playGame);






