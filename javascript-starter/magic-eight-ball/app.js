let userName = "Ana";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = "Will I become a werewolf tonight?";

console.log(`${userName} asked '${userQuestion}'`);

var randomNumber = Math.floor(Math.random() * 8);

if (randomNumber) {
  var eightBall = 3 + 1;
} else {
  eightBall = 3;
}

console.log(eightBall);

switch (eightBall) {
  case 0:
    console.log("It is certain");
    break;
  case 1:
    console.log("It is decidedly so");
    break;
  case 2:
    console.log("Reply hazy try again");
    break;
  case 3:
    console.log("Cannot predict now");
    break;
  case 4:
    console.log("Do not count on it");
    break;
  case 5:
    console.log("My sources say no");
    break;
  case 6:
    console.log("Outlook not so good");
    break;
}
