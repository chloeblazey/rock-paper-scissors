// Maps "player computer" choices to game outcomes.
const POSSIBLE_OUTCOMES = new Map();

POSSIBLE_OUTCOMES.set("rock rock", "It's a tie :/");
POSSIBLE_OUTCOMES.set("rock paper", "Computer Victory! All hail the robot overlords!");
POSSIBLE_OUTCOMES.set("rock scissors", "Player Wins! The indomitable human spirit lives on!");
POSSIBLE_OUTCOMES.set("paper rock", "Player Wins! The indomitable human spirit lives on!");
POSSIBLE_OUTCOMES.set("paper paper", "It's a tie :/");
POSSIBLE_OUTCOMES.set("paper scissors", "Computer Victory! All hail the robot overlords!");
POSSIBLE_OUTCOMES.set("scissors rock", "Computer Victory! All hail the robot overlords!");
POSSIBLE_OUTCOMES.set("scissors paper", "Player Wins! The indomitable human spirit lives on!");
POSSIBLE_OUTCOMES.set("scissors scissors", "It's a tie :/");

// Initializes scores
let playerScore = 0;
let computerScore = 0;

// Initializes a reference to the elements containing the player and computer scores, as well as the elements that display the game status
const playerScoreContainer = document.querySelector("#player-score-container");
const computerScoreContainer = document.querySelector("#computer-score-container");
const messageA = document.querySelector("#message-a");
const messageB = document.querySelector("#message-b");

// Plays a single round of RPS.
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  computerSelection = computerSelection.toLowerCase().trim();
  return POSSIBLE_OUTCOMES.get(playerSelection + " " + computerSelection);
}

// Randomly returns either rock, paper, or scissors.
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Updates the score based a string output describing the round's outcome
// Updates the scoreboard on screen as well
function updateScore(roundOutcome) {
  if (roundOutcome === "Player Wins! The indomitable human spirit lives on!") {
    ++playerScore;
    playerScoreContainer.textContent = "Player Score: " + playerScore;
  } else if (roundOutcome === "Computer Victory! All hail the robot overlords!") {
    ++computerScore;
    computerScoreContainer.textContent = "Computer Score: " + computerScore;
  }
}

// Adds event listeners to the player buttons that:
// 1. trigger a round of rps based on the player's selection
// 2. update the game score
// 3. update the game status message
const buttons = document.querySelectorAll("button");
buttons.forEach((el) => {
    el.addEventListener("click", () => {
      let computerSelection = getComputerChoice();
      let playerSelection = el.textContent;
      let roundOutcome = playRound(playerSelection, computerSelection);
      updateScore(roundOutcome);
      messageA.textContent = "You played " + playerSelection + "."
        + " The computer played " + computerSelection + ".";
      messageB.textContent = roundOutcome;
    })
});