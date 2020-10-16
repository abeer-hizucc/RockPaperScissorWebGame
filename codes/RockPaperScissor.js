const userScore = 0;
const computerScore = 0;
const selectedUserScore  = document.getElementById("user-score");
const selectedComputerScore = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

rock_div.addEventListener('click',function () {
    console.log("rock");
})
paper_div.addEventListener('click',function(){
    console.log("paper");
})
scissor_div.addEventListener('click',function(){
    console.log("scissor");
})