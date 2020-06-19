var menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers) {
    return (this._courses.appetizers = appetizers);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains) {
    return (this._courses.mains = mains);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(desserts) {
    return (this._courses.desserts = desserts);
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    var dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    var dishes = this._courses[courseName];
    var index = Math.floor(dishes.length * Math.random());

    return dishes[index];
  },
  generateRandomMeal() {
    var appetizer = this.getRandomDishFromCourse("appetizers");
    var main = this.getRandomDishFromCourse("mains");
    var dessert = this.getRandomDishFromCourse("desserts");
    var totalPrice = appetizer.price + main.price + dessert.price;

    return `You meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "Caesar Salad", 4.25);
menu.addDishToCourse("appetizers", "Salad 2", 4.5);
menu.addDishToCourse("appetizers", "Salad 3", 5.25);

menu.addDishToCourse("mains", "Pasta", 4.25);
menu.addDishToCourse("mains", "Rice", 4.5);
menu.addDishToCourse("mains", "Potato", 5.25);

menu.addDishToCourse("desserts", "Ice Cream", 4.25);
menu.addDishToCourse("desserts", "Brownie", 4.5);
menu.addDishToCourse("desserts", "Pudding", 5.25);

var meal = menu.generateRandomMeal();

console.log(meal);
