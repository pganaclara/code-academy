let raceNumber = Math.floor(Math.random() * 1000);

let registered = true;
let age = 18;

if (registered && age >= 18) {
  raceNumber += 1000;
}

if (registered && age > 18) {
  console.log(`${raceNumber}, your race will start at 9:30.`);
} else if (!registered && age > 18) {
  console.log(`${raceNumber}, your race will start at 11:00.`);
} else if (age < 18) {
  console.log(`${raceNumber}, your race will start at 12:30.`);
} else {
  console.log(`${raceNumber}, you should see the registration desk.`);
}
