let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const generateCompChoice = ()=>{
    const options = ["Rock", "Paper", "Scissors"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
};

const drawGame = (choice) =>{
    msg.innerText = `It was a draw! ${choice} matches ${choice}`;
    msg.style.backgroundColor = "#ff99ac"; 
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        uScore.innerText = userScore;
        msg.innerText = `Yippie! You won :) ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#80ED99"; 
    }
    else{
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = `Oops, You lost :( ${userChoice} loses to ${compChoice}`;
        msg.style.backgroundColor = "#F07167"; 
    }
};

const playGame = (userChoice) =>{
    const compChoice = generateCompChoice();

    if(userChoice === compChoice){
        // Draw Condtion
        drawGame(userChoice);
    }
    else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = (compChoice === "Paper" ? false : true);
        }
        else if(userChoice === "Paper"){
            userWin = (compChoice === "Scissors" ? false : true);
        }
        else{
            userWin = (compChoice === "Rock" ? false : true);
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        let userChoice = choice.getAttribute("id");
        userChoice = userChoice[0].toUpperCase() + userChoice.slice(1);
        playGame(userChoice);
    })
});