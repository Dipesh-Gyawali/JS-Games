let containers = document.querySelectorAll(".container > div");

let you = document.querySelector("#you");
let comp = document.querySelector("#comp");

let winner = document.querySelector("#win");

let youScore = document.querySelector("#you-score");
let compScore = document.querySelector("#comp-score");

let userPoint = 0;
let computerPoint = 0;

// Set initial state
you.innerHTML = "You selected: ";
comp.innerHTML = "Computer selected: ";

containers.forEach((container) => {
  container.addEventListener("click", () => {
    let youSelected = container.getAttribute("id");
    console.log("you Selected f:", youSelected);
    playGame(youSelected); // Pass the youSelected value to playGame function
  });
});

const computerSelection = () => {
  let options = ["scissor", "paper", "rock"];
  let idx = Math.floor(Math.random() * 3);
  console.log("Comp Selected f:", options[idx]);
  return options[idx];
};

const playGame = (youSelected) => {
  // Accept youSelected as an argument

  // If youSelected is undefined (i.e., when playGame() is called initially)
  // set it to an empty string
  youSelected = youSelected || "";
  you.innerHTML = `You selected: ${youSelected}`;

  let computerSelected = computerSelection();
  comp.innerHTML = `Comp selected: ${computerSelected}`;

  let win = false;

  if (youSelected === computerSelected) {
    winner.innerHTML = "DRAW";
    return;
  } else if (youSelected === "scissor") {
    win = computerSelected === "paper" ? true : false;
  } else if (youSelected === "paper") {
    win = computerSelected === "rock" ? true : false;
  }

  if (win) {
    winner.innerHTML = "USER WON";
    userPoint++;
    youScore.innerHTML = `User ${userPoint}`;
  } else {
    winner.innerHTML = "COMPUTER WON";
    computerPoint++;
    compScore.innerHTML = `Comp ${computerPoint}`;
  }
};
