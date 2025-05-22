// let userScore = 0;
// let compScore = 0;

// const genCompChoice = () => {
//     const options = ["rock", "paper", "scissors"];
//     const randIdx = Math.floor(Math.random()*3);
//     return options[randIdx];
// }

// const drawGame = () => {
//     console.log("The game is a draw")
// }

// const playGame = (userChoice) => {
//     console.log("The user choice is " + userChoice);
//     const compChoice = genCompChoice();
//     console.log("The computer choice is: " + compChoice);


//     if(userChoice === compChoice){
//         drawGame();
//     }
//     else{
//         let userWin = true;
//         if(userChoice === "rock"){
//             userWin = (compChoice==="paper" ? false : true);
//         }
//         else if(userChoice === "paper"){
//             userWin = (compChoice === "scissors" ? false : true);
//         }
//         else if(userChoice === "scissors"){
//             userWin = (compChoice === "rock" ? false : true);
//         }
//     }

// }


// //Tracking choices of users
// const choices = document.querySelectorAll(".choice");

// choices.forEach((choice) => {
//     choice.addEventListener("click", (eve) => {
//         const userChoice = choice.getAttribute("id");
//         playGame(userChoice);
//     })
    
// });



let userScore = 0;
let computerScore = 0;



const choices = document.querySelectorAll(".choice");
let gameMessage = document.querySelector("#mc-text");
let userScreenScore = document.querySelector("#playerScore");
let compScreenScore = document.querySelector("#computerScore");




// const userChoice = (choices.forEach((choice) => {
//     choice.addEventListener("click", (ele) => {
//         const userChoice = choice.getAttribute("id");
//         return userChoice;
//     })
// }));


// const userChoice = () =>{
//     choices.forEach((choice) =>{
//         choice.addEventListener("click", () =>{
//             const userSelection = choice.getAttribute("id");
//             return userSelection;
//         })
//     })
// };

const genCompChoice = () => {
    let idx = Math.floor(Math.random()*3);
    const options = ["rock", "paper", "scissor"];
    let optionChosen = options[idx];
    return optionChosen;
}

const drawGame = () =>{
    return "The game is a draw";
}
const showWinner = (userWin) => {
    if(userWin){
        userScore++
        userScreenScore.innerText = userScore;
        return "You win!";
    }else{
        computerScore++;
        compScreenScore.innerText = computerScore;
        return "You lose";
    }
}


const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(`user choice: ${userChoice}`);
    console.log(`computer choice: ${compChoice}`);
    if(userChoice === compChoice){
        gameMessage.innerText = drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper --> comp choice
            userWin = (compChoice === "scissor" ? true : false);
            gameMessage.innerText = showWinner(userWin);
        }else if(userChoice === "scissor"){
            //paper, rock --> comp choice
            userWin = (compChoice === "paper" ? true : false);
            gameMessage.innerText = showWinner(userWin);
        }else if(userChoice === "paper"){
            userWin = (compChoice === "rock" ? true : false);
            gameMessage.innerText = showWinner(userWin);
        }
    }

}




choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

