let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;

let botDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let currentlyPlaying = true;

let startButton = document.getElementById("start");

var isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

var isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

var playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isBot(door)) {
    return gameOver();
  }
};

var randomChoreDoorGenerator = () => {
  var choreDoor = Math.floor(Math.random() * numClosedDoors);

  switch (choreDoor) {
    case 0:
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
      break;

    case 1:
      openDoor3 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      break;

    case 2:
      openDoor2 = botDoorPath;
      openDoor3 = beachDoorPath;
      openDoor1 = spaceDoorPath;
      break;
  }
};

doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentPlaying) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentPlaying) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentPlaying) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

var startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentPlaying = true;
  randomChoreDoorGenerator();
};

startButton.onclick = () => {
  if (!currentPlaying) {
    startRound();
  }
};
var gameOver = (status) => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
  } else {
    startButton.innerHTML = "Game Over! Play again?";
  }
  currentlyPlaying = false;
};

startRound();
