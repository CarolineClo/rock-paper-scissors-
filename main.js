//computer loads game starts
window.addEventListener("load", startGame);
let playerChoice;
let computerHand;

//player 1 makes a choice
function startGame() {
  console.log("hi");
  document.querySelector(".rock").addEventListener("click", playerRock);
  document.querySelector(".paper").addEventListener("click", playerPaper);
  document.querySelector(".scissors").addEventListener("click", playerScissors);
}

function playerRock() {
  document.querySelector("#win").classList.add("hidden");
  playerChoice = "rock";
  console.log(playerChoice);
  computerChoice();
}
function playerPaper() {
  document.querySelector("#win").classList.add("hidden");
  playerChoice = "paper";
  console.log(playerChoice);
  computerChoice();
}
function playerScissors() {
  document.querySelector("#win").classList.add("hidden");
  playerChoice = "scissors";
  console.log(playerChoice);
  computerChoice();
}

//computer (player 2) makes his choice and the buttons cannot be clicked again

function computerChoice() {
  document.querySelector(".rock").removeEventListener("click", playerRock);
  document.querySelector(".paper").removeEventListener("click", playerPaper);
  document.querySelector(".scissors").removeEventListener("click", playerScissors);
  if (playerChoice === "rock") {
    console.log("computer chooses scissors");
  }
  shake();
}

//play shake animation
function shake() {
  console.log("shake");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", showHands);
}

//show hands player always wins
function showHands() {
  console.log("show me");
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");

  if (playerChoice === "paper") {
    console.log("computerstone");
    document.querySelector("#player1").classList.add("paper");
    document.querySelector("#player2").classList.add("rock");
    document.querySelector("#win").classList.remove("hidden");
  }
  if (playerChoice === "rock") {
    console.log("computerscissors");
    document.querySelector("#player1").classList.add("rock");
    document.querySelector("#player2").classList.add("scissors");
    document.querySelector("#win").classList.remove("hidden");
  }
  if (playerChoice === "scissors") {
    console.log("computerpaper");
    document.querySelector("#player1").classList.add("scissors");
    document.querySelector("#player2").classList.add("paper");
    document.querySelector("#win").classList.remove("hidden");
  }
  document.querySelector(".rock").addEventListener("click", startAgain);
  document.querySelector(".paper").addEventListener("click", startAgain);
  document.querySelector(".scissors").addEventListener("click", startAgain);
}

function startAgain() {
  console.log("restart");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#player1").classList.remove("scissors", "rock", "paper");
  document.querySelector("#player2").classList.remove("scissors", "rock", "paper");
  startGame();
}

//show winning screen
//winner chooses play again or back to start
