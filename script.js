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

    if(getHumanChoice == "ROCK" && getComputerChoice == "SCISSORS"||
    getHumanChoice=="PAPER" && getComputerChoice=="ROCK"||
    getHumanChoice=="SCISSORS" && getComputerChoice=="PAPER"){
        console.log("You chose: " + getHumanChoice);
        console.log("Computer Chose: " + getComputerChoice);
        console.log("You Win!!\n\n");
        document.getElementById("computerChoice").innerHTML = "<img src=\"./images/rock.png\" alt=\"Rock\">";
        
        humanScore++;
        document.getElementById("hScore").innerHTML = humanScore;
        document.getElementById("cScore").innerHTML = computerScore;
    }else if(getHumanChoice==getComputerChoice){
        console.log("You chose: " + getHumanChoice);
        console.log("Computer Chose: " + getComputerChoice);
        console.log("It's a tie\n\n");
        document.getElementById("computerChoice").innerHTML = "<img src=\"./images/paper.png\" alt=\"Paper\">";
        document.getElementById("hScore").innerHTML = humanScore;
        document.getElementById("cScore").innerHTML = humanScore;
    }else{
        console.log("You chose: " + getHumanChoice);
        console.log("Computer Chose: " + getComputerChoice);
        console.log("You Lose\n\n");
        document.getElementById("computerChoice").innerHTML = "<img src=\"./images/scissors.png\" alt=\"Scissors\">";
        computerScore++;

        document.getElementById("hScore").innerHTML = humanScore;
        document.getElementById("cScore").innerHTML = computerScore;
    }

}

let Rounds = 5;
let currentRound =1;

function playGame(humanChoice,computerChoice){
    
    document.getElementById("currRound").innerHTML = currentRound;
    if(currentRound<=Rounds){
        playRound(humanChoice,computerChoice);
        currentRound++;

    }

}

document.addEventListener("DOMContentLoaded", function(){

    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorsBtn = document.getElementById("scissorsBtn");

    

    rockBtn.addEventListener("click",function(){
        const computerChoice = getComputerChoice();
        playGame("ROCK",computerChoice);
    });

    paperBtn.addEventListener("click",function(){
        const computerChoice = getComputerChoice();
        playGame("PAPER",computerChoice);
    });

    scissorsBtn.addEventListener("click",function(){
        const computerChoice = getComputerChoice();
        playGame("SCISSORS",computerChoice);
    });
});



//console.log("human score: "+humanScore);
//console.log("computer score: "+computerScore);





//console.log(humantest);



