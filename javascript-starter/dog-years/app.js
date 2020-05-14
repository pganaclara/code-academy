var myAge = 20; //my age
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

myAge -= 2;
let laterYears = myAge;

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

var myAgeInDogYears = earlyYears + laterYears;

var myName = "Ana".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
