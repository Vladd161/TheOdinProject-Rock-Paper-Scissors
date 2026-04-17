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
        console.log(`Tie! You both chose ${humanChoice}.`)
   }else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You won! Paper beats Rock.");
        humanScore += 1;
   }else if(humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You won! Scissors beats Paper.");
        humanScore += 1;
   }else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You won! Rock beats Scissors");
        humanScore += 1;
   }else{
        console.log(`You Lost! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1;
    }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);