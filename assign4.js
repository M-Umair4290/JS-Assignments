var a, b, c;

// legal variables
let myVariablee = 42;
let _privateVar = "secret";
let $dollarSign = true;
let variable123 = "number";
let camelCase = "example";

// illegal variables
/* let 1stVariable = "invalid";
let my-variable = "invalid";
let let = "invalid";
let my variable = "invalid";
let myVariable! = "invalid"; */


document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, $ or _. For example: $name, _name or name</p>");
document.write("<p>Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>")