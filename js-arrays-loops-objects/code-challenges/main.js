/*
reverseArray()
Write a function, reverseArray(), that takes in an array as an argument and returns a
 new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. 
Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

const sentence = ['sense.','make', 'all', 'will', 'This'];

reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.'];


*/

// Write your code here:
reverseArray = (array) => {
  var reverse = array.reverse();

  return reverse;
};

reverseArray = (array) => {
  var j = 0;
  var reverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverse[j] = array[i];
    j++;
  }
  return reverse;
};

// When you're ready to test your code, uncomment the below and run:

const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

/*
greetAliens()

Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a 
greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 

Note: You may have noticed how convenient it would be to use .forEach(), but you’re not allowed 
to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!
*/

var greetAliens = (arrayStrings) => {
  for (var i = 0; i < arrayStrings.length; i++) {
    console.log(
      `Oh powerful ${arrayStrings[i]}, we humans offer our unconditional surrender!`
    );
  }
};

// When you're ready to test your code, uncomment the below and run:
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

var greetAliens = (strArr) => {
  console.log(
    `Oh powerful ${strArr}, we humans offer our unconditional surrender!`
  );
};

// When you're ready to test your code, uncomment the below and run:
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

aliens.forEach(greetAliens);

/*
convertToBaby()

Write a function, convertToBaby(), that takes in an array as an argument and, using a loop,
 returns a new array with each string in the array prepended with 'baby '.

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here.
Don’t worry you’ll have plenty of opportunities to use built-in methods later on!
*/

var convertToBaby = (arr) => {
  const babyArray = [];
  for (let i = 0; i < arr.length; i++) {
    babyArray.push(`baby ${arr[i]}`);
  }
  return babyArray;
};

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];
console.log(convertToBaby(animals));

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

var convertToBaby = animals.map((arr) => {
  return console.log(`baby ${arr}`);
});

/*
Fix The Broken Code!

We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array results. We loop through the argument array and push in
 the smallest power of two which is greater than the current element.

It’s not doing what we want. Can you fix our code, please?

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            i = 1;
            while (i < number) {
                  i = i * 2;
            }
            results.push(i);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
*/
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = [];
  var num = 1;
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    num = 1;
    while (num < number) {
      num = num * 2;
    }
    results.push(num);
  }
  return results;
};

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

/*
declineEverything() and acceptEverything()

1.Write a function declineEverything() that takes in an array of strings and, using .forEach(), 
loops through each element in the array and calls politelyDecline() with each of them.
The .forEach() function should apply politelyDecline() directly; it should NOT merely receive argument 
function that uses politelyDecline().
You can test your function when you’re ready by passing in the veggies array or by making your own array!

2.Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and 
loops through each element in the array and grudgingly accepts each of them, by logging to the console 
in the following format: 'Ok, I guess I will eat some [element].'
You can use any technique you want to accomplish this task. You can test your function when you’re 
ready by passing in the veggies array or by making your own array!
*/

const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

const declineEverything = (arrStr) => {
  arrStr.forEach(politelyDecline);
};

const acceptEverything = (arrStr) => {
  arrStr.forEach((e) => {
    console.log(`Ok, I guess I will eat some ${e}.`);
  });
};

/*
squareNums()

Write a function, squareNums(), that takes in an array of numbers and, using .map(), 
returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the numbers array or by making your own array!
*/

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

const squareNums = (arr) => arr.map((x) => x * x);
const squareNums = (arr) => arr.map(toSquare);

console.log(squareNums(numbers));

/*
shoutGreetings()

Write a function shoutGreetings() that takes in an array of strings and returns a new array. 
This new array should contain all the strings from the argument array but with capitalized letters 
and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!
*/

var shoutGreetings = (arr) => arr.map((word) => word.toUpperCase() + "!");

var shoutGreetings = (arr) => {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase() + "!");
  }
  return newArr;
};

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));

/*
sortYears()

Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, 
returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the years array or by making your own array 
of years!

*/
var sortYears = (arrYears) =>
  arrYears.sort(function (a, b) {
    return b - a;
  });
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

/*
justCoolStuff()

Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter()
 method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

justCoolStuff(arr1, arr2); // Should return ['this']

You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by 
making arrays of your own!
*/

var justCoolStuff = (arr1, arr2) => {
  var newArr = arr1.filter((word) => arr2.includes(word));
  return newArr;
};

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

/*
isTheDinnerVegan()
Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

{name: 'cabbage', source: 'plant' }

and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'},
 {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

isTheDinnerVegan(meal); // Should return true

You can test your function when you’re ready by passing in the dinner array or by making your own!
*/

const isTheDinnerVegan = (arr) => arr.every((food) => food.source === "plant");

function isTheDinnerVegan(arr) {
  const isVegan = (food) => {
    if (food.source === "plant") {
      return true;
    }
    return false;
  };
  for (let i = 0; i < arr.length; i++) {
    if (!isVegan(arr[i])) {
      return false;
    }
  }
  return true;
}

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));

/*
sortSpeciesByTeeth()
Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:

{speciesName: 'shark', numTeeth: 50 }

and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth).

You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function, 
or use an anonymous function for your argument to .sort().

You can test your function when you’re ready by passing in the speciesArray array or by making your own!
*/

const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

const sortSpeciesByTeeth = (arr) =>
  arr.sort((obj1, obj2) => obj1.numTeeth > obj2.numTeeth);

console.log(sortSpeciesByTeeth(speciesArray));

/*
Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. 
If the keys are in the array, your function should return the index at which they can be found. 
If they’re not in the array, your function should return -1.

const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);
// Should return -1

You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in 
method that will make pretty quick work of it.

You can test your function when you’re ready by passing in the randomStuff array or by making your own array!
*/

var findMyKeys = (arr) => arr.findIndex((element) => element === "keys");

const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];

console.log(findMyKeys(randomStuff));
// Should print 4

/*
Write a function, dogFactory(). It should:
    have 3 parameters: name, breed, and weight (in that order)
    expect name and breed to be strings
    expect weight to be a number
    return an object
    have each of those parameters as keys on the returned object returned with the values of the arguments 
    that were passed in

dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

Add getters and setters for each of the three properties and change the property names to have an 
underscore prepended.

Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats()
which should increment the weight property by 1.
*/

const dogFactory = (name, breed, weight) => {
  return {
    _name,
    _breed,
    _weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return "ruff! ruff!";
    },
    eatTooManyTreats() {
      this._weight++;
    },
  };
};
