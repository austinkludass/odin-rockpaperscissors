let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 100);
    if (random < 33) {
        return "rock";
    } else if (random > 33 && random < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let answer = prompt("Enter Rock, Paper or Scissors");
    return answer;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice) {
        case "rock": 
            if (computerChoice === "rock") console.log("It's a draw! Both chose Rock");
            else if (computerChoice === "scissors") {
                humanScore++;
                console.log("You win! Rock beats Scissors");
            } else {
                computerScore++;
                console.log("You lose! Paper beats Rock");
            }
            break;
        case "paper": 
            if (computerChoice === "paper") console.log("It's a draw! Both chose Paper");
            else if (computerChoice === "rock") {
                humanScore++;
                console.log("You win! Paper beats Rock");
            } else {
                computerScore++;
                console.log("You lose! Scissors beats Paper");
            }
            break;
        case "scissors": 
            if (computerChoice === "scissors") console.log("It's a draw! Both chose Scissors");
            else if (computerChoice === "paper") {
                humanScore++;
                console.log("You win! Scissors beats Paper");
            } else {
                computerScore++;
                console.log("You lose! Rock beats Scissors");
            }
            break;
        default: 
            console.log("Invalid input, nobody wins");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Game results: \nHuman Score: ${humanScore}\nComputer Score: ${computerScore}`);
}

playGame();
