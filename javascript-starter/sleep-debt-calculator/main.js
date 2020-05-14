const getSleepHours = (day) => {
  switch (day) {
    case "sunday":
      return 10;
    case "monday":
      return 11;
    case "tuesday":
      return 9;
    case "wednesday":
      return 10;
    case "thursday":
      return 12;
    case "friday":
      return 8;
    case "saturday":
      return 11;
  }
};

const getActualSleepHours = () => {
  var sum =
    getSleepHours("sunday") +
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday");
  return sum;
};

/* 
getActualSleepHours() could be implemented without calling getSleepHours(). 
Use literal numbers and the + operator to rewrite getActualSleepHours(). 
It should still return the total actual hours slept in the week.
*/

/* 
const getActualSleepHours = () => {
  var sum = 10 + 11 + 9 + 10 + 12 + 8 + 11; 
  return sum;
}; 
*/

const getIdealSleepHours = (hoursNeeded) => {
  var idealHours = hoursNeeded;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(8);

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than need!");
    console.log(
      "You slept " +
        (actualSleepHours - idealSleepHours) +
        " hours more than ideal!"
    );
  } else {
    console.log("You should get some rest!");
    console.log(
      "You slept " +
        (idealSleepHours - actualSleepHours) +
        "hours less than ideal!"
    );
  }
};

calculateSleepDebt();
