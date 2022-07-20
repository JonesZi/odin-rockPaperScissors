// getComputerChoice - Function which randomly reutrns either "Rock", "Paper" or "Scissors"
    // Understand
        // Create a function with no input that outputs one of three options randomly.
    // Plan
        // Interface - none
        // Input - none
        // Output - String, either "Rock", "Paper" or "Scissors"
    // Algorithm
        // Create a Random Number between 1 and 3 (Integers)
        // Allocate each String option to one number
            // If 1 then return "Rock"
            // Else if 2 then return "Paper"
            // Else return "Scissors"

function getComputerChoice() {
    let string = "";
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// playRound - Function that plays one round of R/P/S
    // Understand
        // Evaluate two inputs and determine a winner - output an according message
    // Plan
        // Interface - none
        // Input - playerSelection and computerSelection
        // Output - Message depending on win / loose / tie
    // Algorithm
        // Make playerSelection case-insensitive (Use separate function?)
        // Walk through cases and output messages accordingly
            // Rock - Rock - "It's a tie!"
            // Rock - Paper - "You loose!"
            // Rock - Scissors - "You win!"
            // Paper - Rock - "You win!"
            // Paper - Paper - "It's a tie!"
            // Paper - Scissors - "You loose!"
            // Scissors - Rock - "You loose!"
            // Scissors - Paper - "You win!"
            // Scissors - Scissors - "It's a tie!"
        // Output message

function capitalize (string) {
    string = string.toLowerCase();
    let letter = string[0];
    let end = string.substring(1);
    letter = letter.toUpperCase();
    return letter + end;
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")){
        return "You win!";
    } else {
        return "You loose!";
    }
}

const playerSelection = capitalize(prompt("Your choice?", "Rock"));
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));