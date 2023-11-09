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
POSSIBLE_OUTCOMES.set("scissors paper", "Player Wins! The indomitable human spirit lives on!");
POSSIBLE_OUTCOMES.set("scissors scissors", "It's a tie :/");

// Plays a single round of RPS.
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  computerSelection = computerSelection.toLowerCase().trim();
  return POSSIBLE_OUTCOMES.get(playerSelection + " " + computerSelection);
}

// Adds event listeners to the player buttons that trigger a round of rps
const buttons = document.querySelectorAll("button");
buttons.forEach((el) => {
    el.addEventListener("click", () => {
      playRound(el.textContent, getComputerChoice());
    })
  }
);

// Plays a game of Rock Paper Scissor, 5 rounds.
function game() {
  alert("You are now playing rock paper scissors.");

  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let computerSelection;
  let outcome;

  alert("Let's play a round.");

  // Gathers the player's input then calculates the outcome
  playerSelection = prompt("Type your choice: rock, paper, or scissors?");
  computerSelection = getComputerChoice();
  outcome = playRound(playerSelection, computerSelection);

  // Updates the score
  if (outcome === "Player Wins! The indomitable human spirit lives on!") {
    ++playerScore;
  } else if (outcome === "Computer Victory! All hail the robot overlords!") {
    ++computerScore;
  }

  // Announces the score
  alert("You chose: " + playerSelection + "\nThe computer chose: " + computerSelection);
  alert(outcome + "\nPlayer: " + playerScore + "    Computer: " + computerScore);
  
  /* 
  // Calculates game winner and announces final score
  if (playerScore < computerScore) {
    alert("Computer has won... you lose.. but you are always a winner in my heart :-)\n\nFinal Score:\nPlayer: " +  playerScore + "    Computer: " + computerScore);
  } else if (playerScore == computerScore) {
    alert("wowee an honest tie... no body wins.. but no body loses?\n\nFinal Score:\nPlayer: " +  playerScore + "    Computer: " + computerScore);
  } else if (playerScore > computerScore) {
    alert("congraulation ! you are a winner ! lets all be friends and celebrate ^_^\n\nFinal Score:\nPlayer: " +  playerScore + "    Computer: " + computerScore);
  }
  */
}
