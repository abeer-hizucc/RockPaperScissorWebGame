 
let userScore = 0;
let computerScore = 0;
const userScore_span  = document.getElementById("user-code");
const computerScore_span = document.getElementById("computer-code");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const computerChooses = document.querySelector(".computerChooses>p");

function getComputerChoice(){
    const c = ['r','p','s'];
    const random = (Math.floor(Math.random()*3));
    return c[random];
}
function print(userChoice,computerChoice){
    let res = "";
    const con = userChoice+computerChoice;
    switch (con) {
        case "rp":
            res = "Rock beats Paper. You win! 🤩 ";
            break;
        case "ps":
            res = "Paper beats Scissor. You win! 🤩 ";
            break;
        case "sr":
            res = "Scissor beats Rock. You win! 🤩 ";
            break;
        case "pr":
            res = "Paper beats Rock. You lose! 🙁";
            break;
        case "sp":
            res = "Scissor beats Paper. You lose! 🙁";
            break;
        case "rs":
            res = "Rock beats Scissor. You lose! 🙁";
            break;
        case "pp":
            res = "Paper beats Paper. It's a draw! 🤝";
            break;
        case "rr":
            res = "Rock beats Rock. It's a draw! 🤝";
            break;
        case "ss":
            res = "Scissor beats Scissor. It's a draw! 🤝";
            break;

    }
    return res;
}
function comp_chooses(computerChoice){
    let comp = "";
    switch (computerChoice) {
        case "r":
            comp = "Computer chooses Rock";
            break;
        case "p":
            comp = "Computer chooses Paper";
            break;
        case "s":
            comp = "Computer chooses Scissor";
            break;
    }
    return comp;
}
function user_win(userChoice,computerChoice){
    userScore = userScore+1;
    console.log("Use score "+userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    computerChooses.innerHTML = comp_chooses(computerChoice);
    result_div.innerHTML = print(userChoice,computerChoice);

}
function computer_win(userChoice,computerChoice){    
     computerScore = computerScore+1;
     console.log("Computer score "+computerScore);
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     computerChooses.innerHTML = comp_chooses(computerChoice);
    result_div.innerHTML = print(userChoice,computerChoice);
}

function draw(userChoice,computerChoice){
console.log("Draw");
computerChooses.innerHTML = comp_chooses(computerChoice);
result_div.innerHTML = print(userChoice,computerChoice);
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    const res = computerChoice+userChoice;
    switch (res) {
        case "rp":
        case "ps":
        case "sr":
            user_win(userChoice,computerChoice);
            
            break;
    
        case "pr":
        case "sp":
        case "rs":
            computer_win(userChoice,computerChoice);
            break;
        case "pp":
        case "rr":
        case "ss":
              draw(userChoice,computerChoice);
            break;
    }

}

function main() {
    rock_div.addEventListener('click',()=>game("r"));
    paper_div.addEventListener('click',()=>game("p"));
    scissor_div.addEventListener('click',()=>game("s"));
    
}
main();
