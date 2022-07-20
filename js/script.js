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
        return "tie";
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")){
        return "win";
    } else {
        return "loose";
    }
}

// game () - Play 5 rounds and declare winner
    // Understand
        // Use a loop to play 5 rounds of R/P/S. Ask for playerSelection in each round. Update the score in each round. Return score and message in the end
    // Plan
        // Interface - Prompt for Input
        // Input - no direct input into function, but will make use of previous functions (getComputerChoice, capitalize and playRound)
        // Output - Choices each round, score each round and Winner declaration in the end
    // Algorithm
        // declare and set userScore and computerScore to 0
        // Create loop with 5 instances
            // getComputerChoice
            // prompt playerChoice (with capitalize)
            // playRound
            // Update Scores
                // If "win" userScore + 1
                // Else if "loose" computerScore + 1
            // console.log scores
        // Declare winner

function game () {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = capitalize(prompt("Your choice?","Rock"));

        roundResult = playRound(playerSelection,computerSelection);

        if (roundResult === "win") {
            userScore += 1;
        } else if (roundResult === "loose") {
            computerScore += 1;
        }
        
        let message = 
        `You chose ${playerSelection}
        Computer chose ${computerSelection}
        Score - You: ${userScore}, Computer: ${computerScore}`;
        console.log(message)
    }
    
    if (userScore > computerScore) {
        console.log("You win the game!")
    } else if (userScore < computerScore) {
        console.log("You loose this game!")
    } else {
        console.log("This game is a tie!")
    }
}

game ();