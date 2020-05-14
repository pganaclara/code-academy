const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("ERROR");
  }
};

function getComputerChoice() {
  var num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    //TIE
    return "Tie!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    //PAPER & ROCK
    return "User won";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    //PAPER & SCISSORS
    return "User lost";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    //ROCK & SCISSORS
    return "User win";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    //ROCK & PAPER
    return "User lost";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    //SCISSORS & PAPER
    return "User win";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    //SCISSORS & ROCK
    return "User lost";
  } else if (userChoice === "bomb") {
    //SCISSORS & ROCK
    return "User won";
  }
}

function playGame() {
  var userChoice = getUserChoice("paper");
  var computerChoice = getComputerChoice();

  console.log(`User threw: ${userChoice}. Computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
