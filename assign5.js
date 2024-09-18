var num1 = 3;
var num2 = 5;

// Addition
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// Subtraction
var sub = num1 - num2;
document.write("Subtraction of " + num1 + " - " + num2 + " = " + sub + "<br>");

// Multiplication
var mul = num1 * num2;
document.write("Multiplication of " + num1 + " * " + num2 + " = " + mul + "<br>");

// Division
var div = num1 / num2;
document.write("Division of " + num1 + " / " + num2 + " = " + div + "<br>");

// Modulus
var rem = num1 % num2;
document.write("Modulus of " + num1 + " % " + num2 + " = " + rem + "<br>");



let myVariable;
console.log("Value after variable declaration is: " + myVariable);

myVariable = 5;
console.log("Initial value: " + myVariable);

myVariable++;
console.log("Value after increment is: " + myVariable);

// Add 7 to the variable
myVariable += 7;
console.log("Value after addition is: " + myVariable);

myVariable--;
console.log("Value after decrement is: " + myVariable);

// Show the remainder after dividing the variable's value by 3
let remainder = myVariable % 3;
console.log("The remainder is: " + remainder);


var ticketPrice = 600;
console.log("Total cost to buy 5 tickets to a movie is " + (ticketPrice * 5) + "PKR");


var tabNum = 4;
document.write("Table of mynum <br>");
document.write(tabNum + " x " + 1 + " = " + (tabNum * 1) + "<br>");
document.write(tabNum + " x " + 2 + " = " + (tabNum * 2) + "<br>");
document.write(tabNum + " x " + 3 + " = " + (tabNum * 3) + "<br>");
document.write(tabNum + " x " + 4 + " = " + (tabNum * 4) + "<br>");
document.write(tabNum + " x " + 6 + " = " + (tabNum * 6) + "<br>");
document.write(tabNum + " x " + 5 + " = " + (tabNum * 5) + "<br>");
document.write(tabNum + " x " + 7 + " = " + (tabNum * 7) + "<br>");
document.write(tabNum + " x " + 8 + " = " + (tabNum * 8) + "<br>");
document.write(tabNum + " x " + 9 + " = " + (tabNum * 9) + "<br>");
document.write(tabNum + " x " + 10 + " = " + (tabNum * 10) + "<br>");


var tempCelsius = 25;
var tempFahrenheit = (tempCelsius * 9 / 5) + 32;

// Output result
console.log(tempCelsius + "°C is " + tempFahrenheit + "°F");

// Get Fahrenheit temperature from user
var tempFahrenheit = 70;

// Convert Fahrenheit to Celsius
tempCelsius = (tempFahrenheit - 32) * 5 / 9;

// Output result
console.log(tempFahrenheit + "°F is " + tempCelsius + "°C");