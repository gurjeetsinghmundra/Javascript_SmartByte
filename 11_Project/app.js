// Scores for user and computer

let userScore = 0;
let computerScore = 0;


// rock, paper, scissors choices
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")

// Score Areas
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");


// All possible options
const computerChoice =()=>{


const options =["rock","paper","scissor"];


// Generate a random number 0,1 or 2
optionIdx = Math.floor(Math.random() *3 );

// Return random option
return options[optionIdx]

}

// Draw Game Function
const drawGame =()=>{
    msg.innerHTML = "It's a Draw! 🤝 Play Again."
    msg.style.backgroundColor = "blue"

}


// Add Click Event to each options

choices.forEach((choice)=>{


    choice.addEventListener("click",()=>{

        const userChoice =  choice.getAttribute("id");

        playGame(userChoice);

        console.log(userChoice);
    })

})



// Show Winner FUnction

const showWinner =(userWin, userChoice, compChoice) =>{

    // userWin = true
    if(userWin){
        // increment user score by 1
        userScore++;

    userScorePara.innerText = userScore;
    // update Ui of user score
        

    msg.innerHTML ='You Win! 🎉 Your ${userChoice} beats ${compChoice}'

    msg.style.backgroundColor = "green";


    }
    // userWin = true
    else{
        computerScore++;

        computerScorePara.innerText = computerScore;
        // update Ui of computer score

        
    msg.innerHTML ='You Lost!  ${compCHoice} beats your ${userChoice}'

    msg.style.backgroundColor = "red";

    }


}


// Main Logic

const playGame = (userChoice) =>{

    const compChoice = computerChoice();

    // true
    if(userChoice === compChoice){
        drawGame();
    }

    else{
        // Assume user wins, then check conditions
        let userWin = true;

        if(userChoice == "rock"){

           userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice =="paper"){
           userWin =  compChoice == "scissor"? false: true;
        }

        else {
            userWin = compChoice == "rock"? false: true;
        }

        showWinner(userWin, compChoice, userChoice);

    }
}

