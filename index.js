// Randomly returns either rock, paper, or scissors.
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Maps "player computer" choices to game outcomes.
const POSSIBLE_OUTCOMES = new Map();

POSSIBLE_OUTCOMES.set("rock rock", "It's a tie :/");
POSSIBLE_OUTCOMES.set("rock paper", "Computer Victory! All hail the robot overlords!");
POSSIBLE_OUTCOMES.set("rock scissors", "Player Wins! The indomitable human spirit lives on!");
POSSIBLE_OUTCOMES.set("paper rock", "Player Wins! The indomitable human spirit lives on!");
POSSIBLE_OUTCOMES.set("paper paper", "It's a tie :/");
POSSIBLE_OUTCOMES.set("paper scissors", "Computer Victory! All hail the robot overlords!");
POSSIBLE_OUTCOMES.set("scissors rock", "Computer Victory! All hail the robot overlords!");
POSSIBLE_OUTCOMES.set(["scissors paper"], "Player Wins! The indomitable human spirit lives on!");
POSSIBLE_OUTCOMES.set(["scissors scissors"], "It's a tie :/");

// Plays a single round of RPS.
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  computerSelection = computerSelection.toLowerCase().trim();
  return POSSIBLE_OUTCOMES.get([playerSelection, computerSelection]);
}
console.log(POSSIBLE_OUTCOMES.has(["rock", "rock"]));
console.log(playRound("rock", "paper"));