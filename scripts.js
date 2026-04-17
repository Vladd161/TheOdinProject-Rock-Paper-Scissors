function getRandomInt(num){
    return Math.floor(Math.random() * num);
}

function getComputerChoice(){
    let randomInt = getRandomInt(3);
    if(randomInt === 0){
        return "rock";
    }else if(randomInt === 1){
        return "paper";
    }else if(randomInt === 2){
        return "scissors"
    }
    return("Invalid Number")
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, Scissors!");
    return humanChoice;
}

function capitalizeFirstLetter(word){
    let lowercaseWord = word.toLowerCase();
    return String(lowercaseWord).charAt(0).toUpperCase() + String(lowercaseWord).slice(1);
}

function playRound(humanChoice, computerChoice){
    /*Paper beats Rock
      Scissors beats Paper
      Rock beats Scissors 
    */
   humanChoice = capitalizeFirstLetter(humanChoice);
   computerChoice = capitalizeFirstLetter(computerChoice);
   if(humanChoice == computerChoice){
        console.log(`Tie! You both chose ${humanChoice}.`)
   }else if(humanChoice == "Paper" && computerChoice == "Rock"){
        console.log("You won! Paper beats Rock.");
        return true;
   }else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log("You won! Scissors beats Paper.");
        return true
   }else if(humanChoice == "Rock" && computerChoice == "Scissors"){
        console.log("You won! Rock beats Scissors");
        return true
   }else{
        console.log(`You Lost! ${computerChoice} beats ${humanChoice}`)
        return false;
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let win = false;
    for(i = 0; i < 5; i++){
        win = playRound(getHumanChoice(), getComputerChoice());
        if(win === true){
            humanScore += 1;
        }else if(win === false){
            computerScore += 1;
        }
    }

    console.log(`Your Score: ${humanScore}`)
    console.log(`Computa Score: ${computerScore}`)
    if(humanScore > computerScore){
        console.log("YOUR THE BEST! YOU WON YOU BEAT THE COMPUTER POG!!!")
    }else if(computerScore < humanScore){
        console.log("...You lost against a computer")
    }else{
        console.log("IIIIIITS A TIE!")
    }
}

playGame();