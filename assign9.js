let city = prompt("Enter your city name: ");
if (city == "Karachi") {
    alert("Welcome to city of lights");
}



let gender = prompt("Enter your gender: ");
if (gender == "Male") {
    document.write("Good Morning Sir.");
}

else if (gender == "Female") {
    document.write("Good Morning Ma'am.");
}



let trafficSignal = prompt("What's the color of traffic signal: ");
if (trafficSignal == "Red") {
    document.write("<br> Must Stop");
}

else if (trafficSignal == "Yellow") {
    document.write("<br> Ready to move");
}

else if (trafficSignal == "Green") {
    document.write("<br> Move now");
}



let remainingFuel = prompt("Enter the remaining fuel of your vehicle in litres: ");
if (remainingFuel < 0.25) {
    document.write("<br> Please refill the fuel in your vehicle.");
}



var a = 4;

if (++a == 5) {
    alert("Given condition for variable a is true");
}

var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");

}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals");

}

if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}



var subject1_Marks = parseInt(prompt("Enter marks for Subject 1:"));
var subject2_Marks = parseInt(prompt("Enter marks for Subject 2:"));
var subject3_Marks = parseInt(prompt("Enter marks for Subject 3:"));
var totalMarks = parseInt(prompt("Enter total marks:"));

var marksObtained = subject1_Marks + subject2_Marks + subject3_Marks;
var percentage = (marksObtained / totalMarks) * 100;

if (percentage >= 80) {
    document.write("Marks Sheet \n\n Total marks: " + totalMarks + "\n Marks obtained: " + marksObtained + "\n Percentage: " + percentage + "% \n Grade: A-one" + "\n Remarks: Excellent");
}

else if (percentage >= 70) {
    document.write("Marks Sheet \n\n Total marks: " + totalMarks + "\n Marks obtained: " + marksObtained + "\n Percentage: " + percentage + "% \n Grade: A" + "\n Remarks: Good");
}

else if (percentage >= 60) {
    document.write("Marks Sheet \n\n Total marks: " + totalMarks + "\n Marks obtained: " + marksObtained + "\n Percentage: " + percentage + "% \n Grade: B" + "\n Remarks: You need to improve");
}

else {
    document.write("Marks Sheet \n\n Total marks: " + totalMarks + "\n Marks obtained: " + marksObtained + "\n Percentage: " + percentage + "% \n Grade: Fail" + "\n Remarks: Sorry");
}



var secretNum = 5;
var guess = parseInt(prompt("Guess a number between 1 and 10:"));

if (guess === secretNum) {
    document.write("Bingo! Correct answer.");
}

else if (guess === secretNum - 1) {
    document.write("Close enough to the correct answer.");
}

else {
    document.write("Wrong answer. The secret number was " + secretNum + ".");
}



var number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0) {
    document.write("The number " + number + " is divisible by 3.");
}

else {
    document.write("The number " + number + " is not divisible by 3.");
}




var myNumber = parseInt(prompt("Enter a number:"));

if (myNumber % 2 === 0) {
    document.write("The number " + myNumber + " is even.");
}

else {
    document.write("The number " + myNumber + " is odd.");
}




var temperature = parseInt(prompt("Enter the temperature in Celsius:"));

if (temperature > 40) {
    document.write("It is too hot outside.");
}

else if (temperature > 30) {
    document.write("The weather today is Normal.");

}

else if (temperature > 20) {
    document.write("Today's weather is cool.");
}

else if (temperature > 10) {
    document.write("OMG! Today's weather is so cool!");
}

else {
    document.write("It's very cold outside!");
}




var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter any one operation (+, -, *, /, %): ");

var result;
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
} else if (operation === "%") {
    result = firstNumber % secondNumber;
} else {
    alert("Invalid operation. Please enter +, -, *, /, or %.");
    return;
}

document.write("The result is: " + result);