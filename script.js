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

let studentz = ["Bright", "Weedsdom", "Dave", "TG", "Victor"];
studentz.splice(1, 0, "Alex");
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

// Control Flow / Condtional Statements (if statement, if else statement, switch statement)

let num = 13;
if (num >= 18) {
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
