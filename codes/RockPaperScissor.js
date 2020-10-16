let userScore = 0;
let computerScore = 0;
const selectedUserScore  = document.getElementById("user-score");
const selectedComputerScore = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const c = ['r','p','s'];
    const random = (Math.floor(Math.random()*3));
    return c[random];
}
function user_win(){
    userScore++;
    console.log(userScore);
    selectedUserScore.innerHTML = userScore;
    selectedComputerScore.innerHTML = computerScore;
}
function computer_win(){
     computerScore++;
     console.log(computerScore);
     selectedComputerScore.innerHTML = computerScore;
     selectedUserScore.innerHTML = userScore;

     
    
}
function draw(){
console.log("Draw");
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    const res = computerChoice+userChoice;
    switch (res) {
        case "rp":
        case "ps":
        case "sr":
            user_win();
            
            break;
    
        case "pr":
        case "sp":
        case "rs":
            computer_win();
            break;
        case "pp":
        case "rr":
        case "ss":
              draw();
            break;
    }

}

function main() {
    rock_div.addEventListener('click',function(){
    game("r");    
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissor_div.addEventListener('click',function(){
        game("s");
    })
}
main();
