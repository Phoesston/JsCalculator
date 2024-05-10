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

function updateImage(getComputerChoice){

    let choice = getComputerChoice;
    let imageName = choice.toLowerCase();
    document.getElementById("computerChoice").innerHTML = `<img src='./images/${imageName}.png' alt='${imageName}'>`;
}

function gameStatus(getHumanChoice,getComputerChoice){
    document.getElementById("cDivChoice").innerHTML = `<h2>I choose: ${getComputerChoice}</h2>`;
    document.getElementById("hDivChoice").innerHTML = `<h2>You choose: ${getHumanChoice}</h2>`;
}


function playRound(getHumanChoice,getComputerChoice){


    if(getHumanChoice == "ROCK" && getComputerChoice == "SCISSORS"||
    getHumanChoice=="PAPER" && getComputerChoice=="ROCK"||
    getHumanChoice=="SCISSORS" && getComputerChoice=="PAPER"){
        console.log("You chose: " + getHumanChoice);
        console.log("Computer Chose: " + getComputerChoice);
        console.log("You Win!!\n\n");

        updateImage(getComputerChoice);
        gameStatus(getHumanChoice,getComputerChoice);
        
        

        humanScore++;
        document.getElementById("hScore").innerHTML = humanScore;
        document.getElementById("cScore").innerHTML = computerScore;
    }else if(getHumanChoice==getComputerChoice){
        console.log("You chose: " + getHumanChoice);
        console.log("Computer Chose: " + getComputerChoice);
        console.log("It's a tie\n\n");

        updateImage(getComputerChoice);
        gameStatus(getHumanChoice,getComputerChoice);
        

        document.getElementById("hScore").innerHTML = humanScore;
        document.getElementById("cScore").innerHTML = humanScore;
    }else{
        console.log("You chose: " + getHumanChoice);
        console.log("Computer Chose: " + getComputerChoice);
        console.log("You Lose\n\n");

        updateImage(getComputerChoice);
        gameStatus(getHumanChoice,getComputerChoice);

        computerScore++;


        document.getElementById("hScore").innerHTML = humanScore;
        document.getElementById("cScore").innerHTML = computerScore;
    }

}


let Rounds = 5;
let currentRound =0;

function playGame(humanChoice,computerChoice){

    if(currentRound<Rounds){
        playRound(humanChoice,computerChoice);
        currentRound++;
        document.getElementById("currRound").innerHTML = currentRound;
    }else{
        if(humanScore > computerScore){
            document.getElementById("winner").innerHTML = "<h2>You Won!!</h2>"
        }else if(humanScore == computerScore){
            document.getElementById("winner").innerHTML = "<h2>We Tied.</h2>"
        }else{
            document.getElementById("winner").innerHTML = "<h2>You Lost!!</h2>"
        }

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



