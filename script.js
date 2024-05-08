function getComputerChoice(){
    let randChoice = Math.floor(Math.random() * 3);

    let choice;

    if(randChoice == 0){
        //console.log("ROCK")
        choice = "ROCK";
        return choice;
        
    }
    else if(randChoice == 1){
        //console.log("PAPER")
        choice = "PAPER";
        return choice;
        
    } 
    else{
        //console.log("SCISSORS")
        choice = "SCISSORS";
        return choice;
        
    }
    



}

function getHumanChoice(choices){
   let choice = prompt("Rock, Paper, or Scissors?",choices);

    choice = choice.toUpperCase();

    return choice;

}
let humanScore = 0;
let computerScore = 0;

function playRound(getHumanChoice,getComputerChoice){

    //console.log("Human: "+getHumanChoice);
    //console.log("Computer: "+getComputerChoice);
    if(getHumanChoice == "ROCK" && getComputerChoice == "SCISSORS"||
    getHumanChoice=="PAPER" && getComputerChoice=="ROCK"||
    getHumanChoice=="SCISSORS" && getComputerChoice=="PAPER"){
        console.log("You chose: " + getHumanChoice);
        console.log("Computer Chose: " + getComputerChoice);
        console.log("You Win!!\n\n");
        humanScore++;
    }else if(getHumanChoice==getComputerChoice){
        console.log("You chose: " + getHumanChoice);
        console.log("Computer Chose: " + getComputerChoice);
        console.log("It's a tie\n\n");
    }else{
        console.log("You chose: " + getHumanChoice);
        console.log("Computer Chose: " + getComputerChoice);
        console.log("You Lose\n\n");
        computerScore++;
    }

}

/*function playGame(){
    let Rounds = 5;
    let currentRound =1;
    
    for(currentRound;currentRound<(Rounds+1); currentRound++){
        console.log("Round: "+currentRound);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice,computerChoice);

    }

  
}*/

playGame();

console.log("human score: "+humanScore);
console.log("computer score: "+computerScore);





//console.log(humantest);



