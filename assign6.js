var a = 10;

document.write("The value of a is: " + a + "<br>");

document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br>");

document.write("The value of a++ is: " + a++ + "<br>");
document.write("Now the value of a is: " + a + "<br>");

document.write("The value of --a is: " + --a + "<br>");
document.write("Now the value of a is: " + a + "<br>");

document.write("The value of a-- is: " + a-- + "<br>");
document.write("Now the value of a is: " + a + "<br>");


var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>");
document.write("a is " + b + "<br>");
document.write("result is " + result);


var userName = prompt("Enter your Name");
alert(userName);


var mynum = prompt("Enter a number for table", 5);

document.write("<br> Table of " + mynum + "<br>");
document.write(mynum + " x " + 1 + " = " + (mynum * 1) + "<br>");
document.write(mynum + " x " + 2 + " = " + (mynum * 2) + "<br>");
document.write(mynum + " x " + 3 + " = " + (mynum * 3) + "<br>");
document.write(mynum + " x " + 4 + " = " + (mynum * 4) + "<br>");
document.write(mynum + " x " + 5 + " = " + (mynum * 5) + "<br>");
document.write(mynum + " x " + 6 + " = " + (mynum * 6) + "<br>");
document.write(mynum + " x " + 7 + " = " + (mynum * 7) + "<br>");
document.write(mynum + " x " + 8 + " = " + (mynum * 8) + "<br>");
document.write(mynum + " x " + 9 + " = " + (mynum * 9) + "<br>");
document.write(mynum + " x " + 10 + " = " + (mynum * 10) + "<br>");


var sub1 = prompt("Enter your 1st Subject Name: ");
var sub2 = prompt("Enter your 2nd Subject Name: ");
var sub3 = prompt("Enter your 3rd Subject Name: ");

var sub1_marks = parseInt(prompt("Enter your Marks of " + sub1 + " : "));
var sub2_marks = parseInt(prompt("Enter your Marks of " + sub2 + " : "));
var sub3_marks = parseInt(prompt("Enter your Marks of " + sub3 + " : "));

var subTotal = 100;

var totalMarks = (sub1_marks + sub2_marks + sub3_marks);
var totalpercent = (totalMarks / (subTotal * 3)) * 100;

document.write("<br> Your Total Obtained Marks are: " + totalMarks);
document.write("<br> Your Perecentage is: " + totalpercent);