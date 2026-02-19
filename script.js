// // // Variables are containers used to store data values in JS
// // const name = "ThankGod";

// A value is a piece of data. It is the most fundamental unit of information that we have in programming. Call it the smallest unit of information e.g 23, 50, "Beans"

// const fruit = "apple";
// let fullName = "John Cena";
// fullName = "Michael Jackson";

// console.log(fruit, fullName, $age);

// Assignment

/*
1.Create 20 different Variables for either of number or string data type.

2. Create 5 variables and reassign their values using dynamic typing. Show all in the browser console

3.  create a paragraph text in your html file. write a logic that changes the text to "I am learnig JavaScript" When a button is clicked.

4. Create an alert that says "Mita School is the best School in Uyo"

*/

// // // 3 ways to declare variables
// // // var, let and const

// // var monica = "Nkem";
// // let names = "John";
// // const namez = "Clement";
// let logoColor = "red";
// let full_Name = "edet Okon";
// let $age = 70;

let javaScriptIsFun;
console.log(typeof javaScriptIsFun);

// // let javaScriptIsFun = true;

// // javaScriptIsFun= 67;

// // console.log(typeof javaScriptIsFun);

// let birthYear;
// birthYear = 2005;
// console.log(typeof birthYear);

// let color = "red";
// console.log(color);
// let firstName = "James";

// console.log(firstName);

// // DATA TYPES
// // string, number, boolean, null, undefined, BigInt, symbol
// There are two types of numbers in js - integers(ints or int) / floats

// let num = 45;
// let num2 = "70"; // string
// let job = "teacher";
// let firstJob = "doctor";
// // integers

// let add = 80;
// let x = 12;
// +, *, **, %, /, $ _
// let a = 20.7;
// let b = 50;
// let c = a + b;
// console.log(c);

// // floats .. these are fractions
// const comma = 56.7;

// // Boolean
// Boolean is a data type that returns either true or false

// console.log(676 === "676");

// let funds = 50;
// let hasAccount = true;

// if (funds >= 200 && hasAccount == true) {
//   alert("This user can be a customer");
// } else {
//   alert("This user cannot be a customer");
// }

// let year;
// year = 2025;
// console.log(year);

// //07087766823

// //Assignment 1: Basic Variables

// //Create variables for your name, age, and country.

// //Print them in a sentence like: my name is Dee, i am 30 years old, and i live in nigeria

// //Create one variable each for:

// //A string

// //A number (integer or float)

// //A boolean

// // if(condition){
// // run this
// // }

// //Create two boolean variables:
// //isRaining = true, haveUmbrella = false.

// // Use if...else to print:

// // "You will get wet!" if it's raining and no umbrella.

// // "You are safe!" otherwise.

// // ==   equal to
// //!==  not equal to

// let isRaining = true;
// let haveUmbrella = false;

// if (isRaining && !haveUmbrella) {
//   console.log("You will get wet!");
// } else {
//   console.log("You are safe!");
// }

// // Arrays
// // Arrays are special type of variables used to store more than one value.

let numbers = [7, 18, 20, 44, 80, 124, 645];

console.log(numbers[5]);

const javaScriptStudents = [
  "ThankGod",
  "King",
  "Dave",
  "Hanna",
  "Victor",
  "Wisdom",
  "Utibe",
  "Cletus",
  "Michelle",
  "Godwin",
  "Bright",
  "Alex",
];

console.log(javaScriptStudents[10]);

// // Object

let church = {
  name: "Die By Fire Ministry",
  founded: 2001,
  founder: "Alex",
  favoriteBibleBooks: ["Matthew", "Deuteronomy", "Malachi", "Solomon"],
  totalNumberOfFineGirls: 89,
  motto: "In osusu we trust",
};
console.log(church.name);

console.log(church["founded"]);

let student = {
  name: "Bright",
  age: 900,
  grade: "SS2",
  subjects: ["Maths", "English", "Geography"],
};

console.log(student["age"]);

console.log(student.subjects);

// const student = {
//   number: 8,
//   laptopModel: "Toshiba",
//   name: "Hannah Samuel",
//   age: 70,
// };

// // Operators
// // Operators are special symbols that perform operations on variables and values.
// //1. Arithmetic Operators, assignment operators, comparison operators, logical operators, string operators

// //Arithmetic Operators
// // -, +, *, %, **, /, ++, --

// //subtraction
// let subNum = 90 - 20;
// console.log(subNum)

// var sub_num = 1000 - 250;

// //Addition

// let addNum = 2 + 3;

// let add_num = 1205 + 5.5;

// Multiplication

// let multNum = 4 * 8;
// let mult_Num = 0.9 * 300;

// // modulus operation

// let modNum = 10 % 3;
// let mod_Num = 27 % 4;

// // Exponentiation (Raised to power of)

// let pNum = 34 ** 5;
// let p_num = 5 ** 5;

// // Division

let divNum = 4 / 3;
let div_Num = 21 / 7;

// // Increment  ++

let incNum = 20;
incNum++;

// incNum = incNum * 2;
incNum *= 2;

// // decrement --

let decNum = 20;
decNum--;
// console.log(decNum);

// // Comparison Operators
// // These are operators used to combine multiple boolean expressions
// // == loose equal to
// //=== strict equal to
// // != loose not equal to
// // !== strict not equal to
// // < less than
// // > greater than
// // <= less than or equal to
// //>= greater than or equalto

// //Examples
// let x = 5;
// let y = 25;
// if (x >= y) {
//   console.log("This logic is true");
// } else {
//   console.log("The logic is false");
// }

// console.log(56 >= 2);

// logical operators
// and (&&) or(||) not(!)

let age = 16;
let hasLicense = true;

if (age >= 18 && hasLicense == true) {
  console.log("This person can drive");
} else {
  console.log("This person cannot drive");
}

// Logical not (!)

let password = "admin";
if (password !== "admin") {
  console.log("Pleaese Login");
} else {
  console.log("Logged in");
}

let isRaining = true;
if (!isRaining) {
  console.log("Go outside");
} else {
  console.log("Stay indoors");
}

// Assignment Operators
// =, +=, -=, *=, /=, %=, **=

let web = 10;
// web = web + 20
web += 20;
console.log(web);

let sub = 50;
sub -= 10;
console.log(sub);

let color = "red";
color += "car";
console.log(color);

// String Operation - concatenation

// let msg = "Hello";
// let msg1 = "Welcome to Mita School";

// let msg3 = msg + msg1;
// console.log(msg3)

let message = "Hello";
message += "World";

let mez = "Hi";
let mezz = "My name is Utibe";

console.log(mez + " " + mezz); // method 1

console.log("Hello" + " " + "My name is Utibe"); // method 2

// Assignment

/*
Assignment 1: Comparison Operators

👉 Ask the user for their age. Then:

Check if they are older than 18

Check if they are exactly 18

Check if they are younger than 18
Display the result as a message like:

"You are old enough!"

"You’re exactly 18, welcome to adulthood!"

"Sorry, you’re still underage."



Assignment 2: Assignment Operators

👉 Create a variable score = 10.

Use +=, -=, *=, /=, and %= on it step by step.

Print the value of score after each operation.

*/
let score = 10;
console.log("Initial score", score); //10;

score += 2;
console.log("after +=2", score); //12

score -= 3;
console.log("after-=3", score); //9

score *= 2;
console.log("after*=2", score); //18

score /= 3;
console.log("after /=3", score); //6

score %= 4;
console.log("after%=4", score); //2

let $age = 12;

if ($age == 18) {
  console.log("You’re exactly 18, welcome to adulthood!");
} else if ($age > 18) {
  console.log("You are old enough!");
} else {
  console.log("Sorry, you’re still underage.");
}

//FUNCTIONS

//SYNTAX
function addNum() {
  //function body
}

// Normal function Examples

//1. A simple function to say hello

function sayHello() {
  console.log("Hello, welcome to javaScript class!");
}
sayHello();

// The act of calling a function is known as invoking  the function.

//2. function with a parameter(input)
function greet(name) {
  alert("Hello" + " " + name + "!");
}
greet("John");

// function expression
// Anytime we get a variable and set it equal to something whther it's a function or string or something else, that is known as expression E.g

const speak = function () {
  console.log("Good day!");
};
speak();

// 3. function that adds two numbers

function addNum(a, b) {
  return a + b;
}
console.log(addNum(5, 30));

function plusNum(x, y) {
  return x + y;
}
console.log(plusNum(34, 12));

//4. function that checks if a number is even
function checkEven(num) {
  return num % 2 === 0;
}
console.log(checkEven(8));

// Arrow Functions
//1. simple arrow function

const sayHi = () => console.log("Hi!");
sayHi();

//2. arrow function with parameter

const greet = (name) => console.log("Hello" + " " + name);

// 3. Arrow function that adds numbers

const addNums = (a, b) => a + b;
console.log(addNums(7.9, 12.0));

// 4. Arrow function with one parameter(no need for brackets)
const mult = (num) => num * num;
console.log(mult(8));

//. 5 Arrow function returning an object

const studentInfo = (name, age) => ({ name: name, age: age });
console.log(studentInfo("David", 70));

//6. Arrow functions with multiple lines (use curly braces + return)

const getGrade = (score) => {
  if (score >= 70) return "A";
  else if (score >= 50) return "B";
  else return "F";
};
console.log(getGrade(80));

//7. Arrow function inside an array map()

const numberz = [1, 2, 3, 4];
const values = [6, 8, 9, 5];
const squares = numberz.map((double) => double * double);
console.log(squares);

// // ARRAYS
// let cars = ["Mercedez", "Bentley", "Porsche", "BMW", "Camero"];

// //. Array push() adds item at the back of an array

// cars.push("Toyota");

// //2 Array pop() - removes an item from the back of an array
// cars.pop();
// cars.pop();

// //3. Array unshift() adds item at the start of an array

// cars.unshift("Maybach");

// //4. Array shift() removes items from the start of an array
// cars.shift();
// console.log(cars);

//5. length() returns the number of items in the array

const fruits = ["Banana", "Apple", "Soursop", "Pawpaw", "Orange"];
console.log(fruits.length);

//6. indexOf() checks the index of an item in the array

console.log(fruits.indexOf("Orange"));

// 7. includes() checks the array for a value or item

console.log(fruits.includes("lemon"));

//8. reverse() reverses the order of items in an array

fruits.reverse();
console.log(fruits);

//9. array sort() sorts items in an array in ascending order

let numbas = [89, 12, 64, 1, 90, 3, 7, 6];

// console.log(numbas.sort());

numbas.sort((x, y) => x - y);
console.log(numbas);

// Advanced Methods

// map()
let juices = fruits.map((fruit) => fruit + "juice");
console.log(juices);

// reduce() - combines an array into a single value

//structure
//array.reduce((accumulator, currentValue) =>{
//  return accumulator + current value;
//}, initialValue);

// example 1. Total score of students

let testScores = [10, 20, 30, 40];
let total = testScores.reduce((sum, score) => sum + score, 0);
console.log(total);

//example2: Joining names into one string

let names = ["Bright", "Weedsdom", "Dave", "ThankGod", "Victor"];
let classList = names.reduce((result, name) => result + ", " + name);
console.log(classList);

// splice() - Add or remove at a specific position
// The splice() method changes (edits) the original array - it can remove, add, or replace the elements at any position

//structure
// array.splice(startIndex, deleteCount, item1, item2, ....);

//startIndex -- where to start changing
//deleteCount -- how many items to remove
// item1, item2 -- items to remove (optional)

//1. remove student

// let studentz = ["Bright", "Weedsdom", "Dave", "TG", "Victor"];
// studentz.splice(1, 2);
// console.log(studentz);

//2. Add a student

let studentz = ["Bright", "Weedsdom", "Dave", "TG", "Victor", "Alex"];
studentz.splice(1, 0, "Cravis");
console.log(studentz);

// slice() - Extracts a portion of an array

//slice() is used to copy or extract a part of an array without changing the original one

// structure:
// array.slice(startIndex, endIndex)
// startIndex -- where to start copying
// endIndex -- where to stop copying (not including this index)

//1. Geeting a portion of students

let studnts = ["Bright", "Weedsdom", "Dave", "TG", "Victor"];
let groupA = studnts.slice(0, 3);
console.log(groupA);

//2.  Copying the last two students

let studntz = ["Bright", "Weedsdom", "Dave", "TG", "Victor"];
let lastTwo = studntz.slice(-2);
console.log(lastTwo);

// filter() - Get only items that meet a condition

// filter() creates a new array with only items that pass a test (condition).

//structure:
// array.filter(item => condition)
// item - each element in the array
// condition - a test that returns boolean

//1. filtering students who passed

let examScores = [35, 70, 90, 45, 80, 11];
let passed = examScores.filter((score) => score >= 50);
console.log(passed);

//2. filtering names that start with J
let namez = ["John", "Dave", "Eunice", "Jane"];
let jnames = namez.filter((name) => name.startsWith("J"));
console.log(jnames);

// Control Flow / Condtional Statements (if statement, else statement, else if, switch statement)

let agee = 15;

if (agee >= 18) {
  console.log("This user is an adult");
} else {
  console.log("This user is a minor");
}

// else if

let divIndex = 5;

if (divIndex >= 9) {
  console.log("This is a first world country");
} else if (divIndex >= 7) {
  console.log("This is a second world country");
} else if (divIndex >= 4) {
  console.log("This is a third world country");
} else if (divIndex >= 2) {
  console.log("This is a fourth world country");
} else {
  console.log("This is a fifth world country");
}

// Switch Statement
let light = "Green";

switch (light) {
  case "Red":
    console.log("Stop!");
    break;
  case "Yellow":
    console.log("Get Ready!");
    break;
  case "Green":
    console.log("Go!");
    break;
  default:
    console.log("Light don spoil");
}
// 2

//callback function

let day = "Sunday";

switch (day) {
  case "monday":
    console.log("First working day of the week");
    break;
  case "tuesday":
    console.log("second working day of the week");
    break;
  case "wednesday":
    console.log("third working day of the week");
    break;
  case "thursday":
    console.log("fourth working day of the week");
    break;
  case "friday":
    console.log("TGIF 🕺🕺💃🕺");
    break;
  default:
    console.log("It is the weekend!");
}

console.log(`today is ${day}`);

// OBJECTS AND OBJECTS METHOD.
// JS is a high-level objected oriented, multi-paradigm programming language.

// An object is a collection of related properties and/ or methods

const person = {
  firstName: "Okon",
  lastName: "Peter",
  age: 70,
  isEmployed: true,
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);

// Object Method is an object property that contains a function definition
const person1 = {
  firstName: "TG",
  lastName: "Effiong",
  favCars: ["benz", "Toyota"],
  greet: function greet() {
    console.log("Hello World!");
  },
};

person1.greet();

const person2 = {
  firstName: "TG",
  lastName: "Effiong",
  favCars: ["benz", "Toyota"],
  greet: function () {
    console.log("Hello goat!");
  },
};
person2.greet();

const person3 = {
  firstName: "Bright",
  lastName: "Atakpa",
};

function sayHello() {
  console.log("Hello");
}
person3.saying = sayHello;
console.log(person3);

const person4 = {
  firstName: "Weedsdom",
  lastName: "Cana",
  cook() {
    console.log("Cook Spag");
  },
};
person4.cook();

// "this" keyword
// To access the other properties of an object within a method of the same object we can use "this" keyword

const person5 = {
  firstName: "Alex",
  lastName: "Owoyop",
  color: "grey",
  age: 100,
  greet: function () {
    console.log("Hello " + this.firstName);
  },
};
person5.greet();

const person6 = {
  firstName: "Dee",
  lastName: "Solomon",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person6.getFullName());

console.log(Object.keys(person6));
console.log(Object.values(person6));
console.log(Object.entries(person6));

// ES6 Syntax - Let, Const, Template Literals, Destructuring
// ES6 stands for ECMAScript 2015

// let and const are block-scoped way of declaring variables
{
  let x = 10;
  console.log(x);
}

console.log(x);

// Template Literals
// Template literals are string literals allowing embedded expressions. They are enclosed by the back-tick(``) character instead of double or single quotes. They make it easier to create strings with variables and expressions.

let fname = "Utibe";
let herAge = 70;
// console.log("My name is " + fname + " and I am " + herAge + " years old.");

console.log(`My name is ${fname} and and I am ${herAge} years old.`);

// Destructuring
// Destructuring is a convenient way of extracting multiple values from data stored in objects and arrays.
// simply put, it is a JS expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

//Destructuing an Object

let person8 = {
  fullName: "Alex",
  hisAge: 90,
  country: "Biafra",
};

// Old Way
// let me = person8.fullName;
// console.log(me);

// ES6 way
let { fullName, hisAge, country } = person8;
console.log(country);

// Destructuring an Array

let colors = ["red", "blue", "green"];

//Old way
// let first = colors[0];
// let second = colors[1];

// console.log(first);

//ES6 way

let [firstColor, secondColor, thirdColor] = colors;

console.log(thirdColor);

// Create an array of fruits and destructure it using the ES6 Method.
// Show the various fruits as a single fruit in the console

// Function Scope and Hoisting
// Scope refers to the accessibility of variables, functions, and objects in some particular part of your code during runtime.
function showMessage() {
  let message = "Hello, welcome to Mita School!";
  console.log(message);
}

showMessage();
// console.log(message); // Error: message is not defined

// hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

console.log(greetUser("John")); // Works because of hoisting

function greetUser(name) {
  return `Hello, ${name}!`;
}

// Basic Error Handling
// An error is an unexpected problem that arises during the execution of a program, disrupting its normal flow.

// An object created to represent a problem
// TYPES OF ERROR

//1. Syntax Error- Occurs when the code is not written according to the syntax rules of the programming language.
//2. Runtime Error - Occurs during the execution of the program, often due to invalid operations or references.
// 3. Logical Errors- Occurs when the code runs without crashing, but produces incorrect or unexpected results.

// EXAMPLES:

console.log("Hello");

console.log("You have reached the end!");

// Network errors
//promise rejections
//security errors
//invalid user input

// try{} = contains the code that may cause an error
//catch(error){}= contains the code that rus if an error occurs in the try block. The error object is passed as a parameter to the catch block.
//finally{} = contains code that will always run after the try and catch blocks, regardless of whether an error occured or not. This block is optional.

//Example

try {
  console.leg("Hello");
} catch (error) {
  console.log(error);
} finally {
  console.log("You have reached the end!");
}

// Errors from user inputs
// const dividend = window.prompt("Enter a dividend");
// const divisor = window.prompt("Enter a divisor");

// const result = dividend / divisor;
// console.log(`The result is ${result}`);

// try{
//   const dividend = window.prompt("Enter a dividend");
// const divisor = window.prompt("Enter a divisor");

// const result = dividend / divisor;
// console.log(`The result is ${result}`);

// }catch(error){
//   console.error(error)
// }finally{
//   console.log("Fine!!")
// }

// try {
//   const dividend = window.prompt("Enter a dividend");
//   const divisor = window.prompt("Enter a divisor");

//   if (divisor == 0) {
//     throw new Error("You can't divide by zero");
//   }

//   const result = dividend / divisor;
//   console.log(`The result is ${result}`);
// } catch (error) {
//   console.error(error);
// }

try {
  const dividend = Number(window.prompt("Enter a dividend"));
  const divisor = Number(window.prompt("Enter a divisor"));

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number");
  }

  const result = dividend / divisor;
  console.log(`The result is ${result}`);
} catch (error) {
  console.error(error);
}

//

const balance = 1000;
const cashout = window.prompt("Enter amount to cash out");

try {
  if (cashout > balance) {
    throw new Error("Insufficient Funds");
  }
  balance -= cashout;
  console.log(`You have successfully cashed out ${cashout}`);
} catch (error) {
  console.error(error);
}

// CLOSURES AND LEXICAL SCOPES
//Closures = A function defined inside another function, the inner function has access to the variables and scope of the outer function.
// By using closures, they:
// Allow for private variables and state maintenance
// Used frequently in JS frameworks: React, Vue, Angular

//EXAMPLE 1:
// function outer() {
//   let message = "Welcome";

//   function inner() {
//     console.log(message);
//   }

//   inner();
// }

// outer();

//EXAMPLE 2:

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(`count increased by ${count}`);
  }

  function getCount() {
    return count;
  }

  return { increment, getCount };
}
const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);

// EXAMPLE 3:  Closure for game
function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore();
game.increaseScore();
game.decreaseScore();

console.log(`The final score is ${game.getScore()}pts`);

// Loops and Iterarion
// A loop is a programming construct that repeats a block of code as long as a specified condition is true.
// Types of loops in JS
// 1. for loop
// 2. while loop
// 3. do...while loop
// 4. for...in loop
// 5. for...of loop

//1. For Loop
////The for loop is used when the number of iterations is known.
for (let i = 0; i < 5; i++) {
  console.log(`Iteration number ${i}`);
}

//2.

//2. While Loop
//// The while loop executes a block of code as long as a specified condition evaluates to true.

// SYNTAX
// while(condition){
//   //code to be executed
// }

let w = 0;
while (w < 10) {
  console.log(`count is ${w}`);
  w++;
}

// the do... while loop
//Syntax
////The do...while loop is similar to the while loop, but guarantees that the code block will be executed at least once, before the condition is checked.
// do {
//   //code block to be executed
// } while (condition);

let s = 2;
do {
  console.log(`count is ${s}`);
  s++;
} while (s < 10);

// for ...in loop
//The for...in loop iterates over the enumerable properties of an object.
//It is typically used for iterating over object keys.

// SYNTAX
//for (key in object) {
// code block to be executed
//}
//A JavaScript for...in statement loops through the properties of a person object:

const personz = { fname: "Weedsdom", lname: "Ifiok", age: 70 };
for (let x in personz) {
  console.log(personz[x] + " ");
}

//  the for.. of loop
////The for...of loop iterates over the values of iterable objects such as arrays, strings, Maps, Sets, and NodeLists.

// SYNTAX
// for (variable of iterable) {
//   // code block to be executed
// }

const cars = ["BMW", "vOLVO", "TOYOTA"];

for (let car of cars) {
  console.log(car);
}

//2.  looping through an array
const colorss = ["red", "blue", "green", "yellow", "purple"];

for (let i = 0; i < colorss.length; i++) {
  console.log(colorss[i]);
}

// ASSIGNMENT
/*1. Create a for loop that prints numbers from 1 to 40 in the console.

2. Create a while loop that prints the even numbers from 2 to 20 in the console.
3. Create a do...while loop that prints the odd numbers from 1 to 19 in the console.
4. Create an object representing a car with properties like make, model, year, and color. Use a for...in loop to print all the properties and their values in the console.
5. Create an array of your favorite movies. Use a for...of loop to print each movie title in the console.
*/

//EVENTS
//HTML events are things that happen to HTML elements.
/*

Examples of events:

An HTML button is clicked
A web page has finished loading
The mouse moves over an element
A keyboard key is pressed
An HTML input field is changed

JavaScript Events
Often, when events happen, you may want to do something.

When JavaScript is used in HTML pages, JavaScript can react on events.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.
*/

// SYNTAX
// with single quotes
// <element event='some JavaScript code'>

// with double quotes
// <element event="some JavaScript code">

//Calling a JS Function
////Calling a JavaScript Function
//  JavaScript code can often be several lines long.It is more common to use the event attribute to call a functions:

/*
Event	Description
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page


Using an Event Listener
Using event attributes like onclick are easy to use.

Nevertheless, using addEventListener() is the recommended way to handle events.
*/

// MOUSE EVENTS
// Mouse events are events that occur when the user interacts with a web page using a mouse.
// Examples of mouse events include:
// click - occurs when the user clicks on an element
// dblclick - occurs when the user double-clicks on an element
// mouseover - occurs when the user moves the mouse pointer over an element
// mouseout - occurs when the user moves the mouse pointer out of an element
// mousedown - occurs when the user presses a mouse button over an element
// mouseup - occurs when the user releases a mouse button over an element
// mousemove - occurs when the user moves the mouse pointer while it is over an element

// KEYBOARD EVENTS
// Keyboard event happens when a the user presses a key on the keyboard
// keydown
//keyup
//keypress

// === Timing Events====
// Timing events are used to schedule code execution at specified time in intervals
// Timing is driven by Timing Events generated by the system clock

// Common Timing Events
// setTimeout(function, milliseconds) - Executes a function once after a specified number of milliseconds.
// setInterval(function, milliseconds) - Repeatedly executes a function at specified time intervals (in milliseconds) until stopped.
// clearTimeout(timeoutID) - Stops a function that was set to execute with setTimeout().
// clearInterval(intervalID) - Stops a function that was set to execute repeatedly with setInterval().

// SetTimeout method
// The SetTimeout() method calls a function or evaluates an expression after a specified number of milliseconds

// SetInterval and clearInterval Method
// setInterval method calls a function repeatedly

// ==== DOM MANIPULATION ====

// DOM selectors
// DOM stands for document object model. It is a programming interface for HTML and XML documents that represent the web page as a structured tree of objects that JavaScript can interact with.

/*
HTML (Grandparent)
├── HEAD (Parent)
│   ├── TITLE (Child)
│   └── META (Child)
└── BODY (Parent)
    ├── H1 (Child)
    ├── P (Child with text)
    └── DIV (Child)
        └── BUTTON (Grandchild)
        */

//The HTML DOM is a tree of Nodes that represents an HTML Page.
//Each part of the document are nodes in the tree:

// const paragraph = document.getElementById("msg");
// paragraph.textContent = "hi";

//DOM Selectors

// DOM selectors are methods used to select and manipulate HTML elements in the DOM
//Common DOM selectors are:
//1. getElementById(): Selects a single elemnt by its unique ID
//2. getElementsByClassName(): Selects all elements with a specific class name
//3. getElementByTagName(): selects all elements with a specific class name.
//4. querySelector(): Selects the first element that matches a specified CSS selector
//5. querySelectorAll(): Selects all the elements that match a specified CSS selector.

// Create method()
// The create method creates a new HTML element specified by tagname

//synthax
// document.createElement(tagName)

// appendChild() method
// The appendChild() method adds a new child node to an element as the last child node
// synthax
// parentNode.appendChild(childNode)

// Remove method()
//The remove() method removes the specified element from the DOM
//synthax: element.remove()

// ===== Manipulating HTML and CSS using JS ====

// ==== Forms and User Input Handling==========
// Forms are used to collect user input on web pages. JavaScript can be used to handle form submissions, validate user input, and provide feedback to users.

// Form Validation
// Form validation is the process of checking user input in a form to ensure it meets certain criteria before it is submitted to the server. This can include checking for required fields, validating email addresses, and ensuring that passwords meet complexity requirements.

// ==== JSON ====
//JSON - (JavaScript Object Notation)
// It is a data-interchange format. It is used for exchanging data between a server and a web application.
//Usually a JSON file comes as an object {key:value} or an array of values[value1, value2]

// JSON formats
// JSON.stringify()
// Using the stringy method of JSON, we can convert a js object or an array into a JSON string
const names = ["Victor", "Utibe", "Weedsdom", "David"];
console.log(names); // before stringifying

const jsonString = JSON.stringify(names);
console.log(jsonString);

const person = {
  name: "   Victor",
  age: 80,
  isEmployed: true,
  hobbies: ["playing footbal", "eating", "cooking"],
};

console.log(person);
const jsonString = JSON.stringify(person);
console.log(jsonString);

const people = [
  {
    name: "Victor",
    age: 80,
    isEmployed: true,
  },

  {
    name: "Utibe",
    age: 50,
    isEmployed: false,
  },

  {
    name: "Weedsdom",
    age: 120,
    isEmployed: true,
  },

  {
    name: "David",
    age: 70,
    isEmployed: false,
  },
];

// The JSON.parse() converts a JSON string into a JavaScript object or array

const jsonNames = `["Victor", "Utibe", "Weedsdom", "David"]`;
const jsonPerson = `{ name: "Victor", age: 80, isEmployed: true, hobbies: ["playing footbal", "eating", "cooking"]}`;
const jsonPeople = `[
  {
    "name": "Victor", "age": 80,"isEmployed": true },
  {
    "name": "Utibe", "age": 50, "isEmployed": false },
  {
    "name": "Weedsdom", "age": 120,"isEmployed": true},
  {
    "name": "David", "age": 70, "isEmployed": false}
]`;

const parsedData = JSON.parse(jsonNames);
console.log(parsedData);
