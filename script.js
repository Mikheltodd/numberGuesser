let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}
function compareGuesses(user, computer, secret) {
  dif_user = getAbsoluteDistance(user, secret);
  dif_computer = getAbsoluteDistance(computer, secret);
  return dif_user <= dif_computer;
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
}

const advanceRound = () => (currentRoundNumber += 1);

const getAbsoluteDistance = (a, b) => Math.abs(a - b);
