let humanScore = 0;
let computerScore = 0;

function getRandomInt(num){
    return Math.floor(Math.random() * num);
}

function getComputerChoice(){
    let randomInt = getRandomInt(3);
    if(randomInt === 0){
        console.log("rock");
        return "rock";
    }else if(randomInt === 1){
        console.log("paper");
        return "paper";
    }else if(randomInt === 2){
        console.log("scissors");
        return "scissors"
    }
    return("Invalid Number")
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, Scissors!");
    console.log(humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    /*Paper beats Rock
      Scissors beats Paper
      Rock beats Scissors 
    */
   if(humanChoice == computerChoice){
        console.log(`Tie! You both chose ${humanChoice}`)
   }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);