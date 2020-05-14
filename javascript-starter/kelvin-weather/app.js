const kelvin = 0; //constant variable

var celsius = kelvin - 273; //celsius is kelvin minus 273

let fahrenheit = celsius * (9 / 5) + 32; //fahrenheit is crazy

fahrenheit = Math.floor(fahrenheit); //round smallest or equal integer

var newton = celsius * (33 / 100);

newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

console.log(`The temperature is ${newton} degrees Newton`);
