// Game state object
const gameState = {
  secretNumber: 0,
  maxNumber: 0,
  timeLeft: 0,
  timer: null,
};

// Start Game Function
function startGame() {
  const difficulty = document.getElementById("difficulty").value;

  //set difficulty rules

  if (difficulty === "easy") {
    gameState.maxNumber = 20;
    gameState.timeLeft = 30;
  } else if (difficulty === "medium") {
    gameState.maxNumber = 50;
    gameState.timeLeft = 20;
  } else {
    gameState.maxNumber = 100;
    gameState.timeLeft = 10;
  }

  // pick a secret number
  gameState.secretNumber = Math.floor(Math.random() * gameState.maxNumber) + 1;

  //show the game area

  document.getElementById("gameArea").style.display = "block";

  //Reset text

  document.getElementById("result").textContent = "Start guessing!";
  document.getElementById("timer").textContent = gameState.timeLeft;

  // start count

  startTimer();
}

// TIMER FUNCTION

function startTimer() {
  gameState.timer = setInterval(() => {
    gameState.timeLeft--;
    document.getElementById("timer").textContent = gameState.timeLeft;

    if (gameState.timeLeft <= 0) {
      clearInterval(gameState.timer);
      document.getElementById(
        "result"
      ).textContent = `⏰ Time's up! The correct number was ${gameState.secretNumber}`;
    }
  }, 1000);
}

// Submit Guess

function submitGuess() {
  const guess = Number(document.getElementById("guessInput").value);

  if (!guess) {
    document.getElementById("result").textContent = "⚠️ Please enter a number.";
    return;
  }

  if (guess === gameState.secretNumber) {
    clearInterval(gameState.timer);
    document.getElementById("result").textContent =
      "🎉 Correct! You guessed the number!";
  } else if (guess > gameState.secretNumber) {
    document.getElementById("result").textContent = "📉 Too high! 😔";
  } else {
    document.getElementById("result").textContent = "📈 Too low! 😭";
  }
}

// Restart Game

function restartGame() {
  clearInterval(gameState.timer);
  document.getElementById("gameArea").style.display = "none";
  document.getElementById("guessInput").value = "";
}


