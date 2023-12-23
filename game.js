// declaring variables
let opponentimg = document.querySelector("#computer-image img");
let operator;
let person1img = document.querySelector("#ParentDiv img");
let wonText = document.querySelector("#won");
let body = document.querySelector("body");
let playAgain = document.querySelector("#retryBtn");
let show = document.querySelector("#EndGame");
let btnRock = document.querySelector("#btnRock");
let paperBtn = document.querySelector("#btnPaper");
let scissorsBtn = document.querySelector("#btnScissors");
let score1Box = document.querySelector("#your-score");
let score2Box = document.querySelector("#computerScore");
let score1 = 0;
let score2 = 0;
// function for computers random choosing
function randomChooseOfComputer() {
  operator = Math.ceil(Math.random() * 3);
  switch (operator) {
    case 1:
      opponentimg.setAttribute("src", "paper-hand.png");
      break;
    case 2:
      opponentimg.setAttribute("src", "rock-hand.png");
      break;
    case 3:
      opponentimg.setAttribute("src", "scissors-hand.png");
      break;
  }
}
// when each button is clicked necessary function should work
paperBtn.onclick = () => {
  person1img.setAttribute("src", "paper-hand.png");
  randomChooseOfComputer();
  if (operator == 2) {
    score1++;
    score1Box.textContent = score1;
  } else if (operator == 3) {
    score2++;
    score2Box.textContent = score2;
  }
  endGame();
};
btnRock.onclick = () => {
  person1img.setAttribute("src", "rock-hand.png");
  randomChooseOfComputer();
  if (operator == 3) {
    score1++;
    score1Box.textContent = score1;
  } else if (operator == 1) {
    score2++;
    score2Box.textContent = score2;
  }
  endGame();
};
scissorsBtn.onclick = () => {
  person1img.setAttribute("src", "scissors-hand.png");
  randomChooseOfComputer();
  if (operator == 1) {
    score1++;
    score1Box.textContent = score1;
  } else if (operator == 2) {
    score2++;
    score2Box.textContent = score2;
  }
  endGame();
};
// function to end the game
function endGame() {
  if (score1 == 5 || score2 == 5) {
    btnRock.style.visibility = "hidden";
    paperBtn.style.visibility = "hidden";
    scissorsBtn.style.visibility = "hidden";
  }
  if (score1 == 5) {
    wonText.textContent = "You";
    body.style.overflowY = "scroll";
    show.style.visibility = "visible";
  } else if (score2 == 5) {
    wonText.textContent = "Comp won the game";
    body.style.overflowY = "scroll";
    show.style.visibility = "visible";
  }
  playAgain.onclick = () => {
    window.open("game.html", "_self");
  };
}
//
