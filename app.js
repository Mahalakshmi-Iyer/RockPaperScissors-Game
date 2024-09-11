let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const generateCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
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
        if(userChoice === "rock"){
            userWin = (compChoice === "paper" ? false : true);
        }
        else if(userChoice === "paper"){
            userWin = (compChoice === "scissors" ? false : true);
        }
        else{
            userWin = (compChoice === "rock" ? false : true);
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});