let playerScore = 0;
let compScore = 0;

let playerScoreOnScreen = document.querySelector("#playerScore");
let compScoreOnScreen = document.querySelector("#computerScore");
let gameResultMessageBoxOnScreen = document.querySelector("#mc-text");

let choices = document.querySelectorAll(".choice");
let genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor((Math.random()*3));
    return options[idx];
}

let drawGame = () => {
    gameResultMessageBoxOnScreen.innerText = "The game is a draw";

}

let gameResult = (userWin) => {
    if(userWin){
        playerScore++;
        playerScoreOnScreen.innerText = playerScore;
        gameResultMessageBoxOnScreen.style.backgroundColor = "green";
        gameResultMessageBoxOnScreen.innerText = "You win!";
    }else{
        compScore++;
        compScoreOnScreen.innerText = compScore;
        gameResultMessageBoxOnScreen.style.backgroundColor = "red";
        gameResultMessageBoxOnScreen.innerText = "You lose";
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        gameResultMessageBoxOnScreen.style.backgroundColor = "black";
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissor --> possible compChoice
            userWin = (compChoice === "scissor");
            gameResult(userWin);
        }else if(userChoice === "paper"){
            //rock, scissor --> possible compChoice
            userWin = (compChoice === "rock");
            gameResult(userWin);
        }else if(userChoice === "scissor"){
            //paper, rock --> possible compChoice
            userWin = (compChoice === "paper");
            gameResult(userWin);
        }
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})




