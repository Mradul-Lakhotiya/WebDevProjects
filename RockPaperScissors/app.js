let choices = document.querySelectorAll(".choice");
let userScoreTxt = document.querySelector("#user-score");
let computeScoreTxt = document.querySelector("#computer-score");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");

let userChoice = undefined;
let computeChoice = undefined;

let userScore = 0;
let computeScore = 0;

const ch = ["r", "p", "s"];

reset.addEventListener("click", () => {
    result.innerText = "Start The Game";
    userScore = 0;
    computeScore = 0;
    userScoreTxt.innerText = "0";
    computeScoreTxt.innerText = "0";
});

const getComputerChoice = () => {
  let randomIndex = Math.floor(Math.random() * ch.length);
  return ch[randomIndex];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    userChoice = choice.id;
    console.log(userChoice);
    whoWins();
  });
});

const whoWins = () => {
  computeChoice = getComputerChoice();
  console.log(computeChoice);

  if (computeChoice === "r" && userChoice === "p") {
    result.innerText = "Paper Beats Rock. You win!";
    userScore++;
  } else if (computeChoice === "s" && userChoice === "p") {
    result.innerText = "Paper Beats Rock. You Loos!";
    computeScore++;
  } else if (computeChoice === "s" && userChoice === "r") {
    result.innerText = "Rock Beats Scissors. You win!";
    userScore++;
  } else if (computeChoice === "r" && userChoice === "s") {
    result.innerText = "Rock Beats Scissors. You Loos!";
    computeScore++;
  } else if (computeChoice === "p" && userChoice === "r") {
    result.innerText = "Paper Beats Rock. You Loos!";
    computeScore++;
  } else if (computeChoice === "p" && userChoice === "s") {
    result.innerText = "Scissors Beats Paper. You win!";
    userScore++;
  } else {
    result.innerText = "It's a draw!";
  }

  userScoreTxt.innerText = userScore;
  computeScoreTxt.innerText = computeScore;
};