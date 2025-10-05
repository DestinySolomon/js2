// // // Variables are containers used to store data values in JS
// // const name = "ThankGod";

// const fruit = "apple";
// let fullName = "John Cena";
// fullName = "Michael Jackson";

// // let js = "amazing";
// // if (js == "amazing") alert("JavaScript is fun!");

// let $age = 45;
// $age = 100;

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

// // string

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

// console.log(676 === "676");

// let funds = 500;
// let hasAccount = true;

// if (funds >= 200 && hasAccount == true) {
//   console.log("This user can be a customer");
// } else {
//   console.log("This user cannot be a customer");
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

// let numbers = [7, 18, 20, 44, 80, 124, 645];
// console.log(numbers[1]);

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
];

// console.log(names[7]);

// // Object

let student = {
  name: "Dee",
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

// var sub_Num = 1000 - 250;

// //Addition

// let addNum = 2 + 3;

// let add_Num = 1205 + 5.5;

// Multiplication
// let multNum = 4 * 8;
// let mult_Num = 0.9 * 300;

// // modulus operation
// let modNum = 10 % 3;
// let mod_Num = 27 % 4;

// // Exponentiation (Raised to power of)
// let pNum = 34 ** 5;
// let p_Num = 5 ** 5;

// // Division
// let divNum = 4 / 3;
// let div_Num = 21 / 7;

// // Increment  ++
// let incNum = 20;
// incNum++;

// // incNum = incNum * 2;
// incNum *= 2;

// // decrement --

// let decNum = 20;
// decNum--;
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

console.log(mez +  + " " + mezz); // method 1


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
/*
function addNum(){
}
 */

//Examples of normal functions

//Example1: a simple function to say "hello"

function sayHello() {
  console.log("Hello, welcome to JavaScript");
}
sayHello(); // invoking or calling a function

// Example2:
// function with a parameter(input)

function greet(name) {
  console.log("Hello" + " " + name + "!");
}
greet("Joy");
