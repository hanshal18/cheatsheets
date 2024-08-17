//* ====================================
//* Values and Variable in JavaScript
//* ====================================

//* In JavaScript, values and variables are fundamental concepts that form the basis of programming.

//* Values:  A value is a piece of information that a program can work with. It can be a number, text, true/false, or more complex data.

//* Variables: A variable is a container that holds a value. It has a name and can be used to store and manipulate data in a program.

console.log("welcome to best js course "); // print the data in console, output:welcome to best js course

var myAge = 30;
console.log(myAge);

// variable naming rules
// Variable names must start with a letter, an underscore (_) or a dollar sign ($).
// Variables cannot be the same as reserved keywords such as if or const.
// Variable names are case sensitive.
// Variable names cannot contain spaces.
// By convention, JavaScript variable names are written in camelCase.
// Variable names can be as long as you need

//! Let's test
var my_firstName = "John"; //✔️
//? Explanation: This is a valid variable name. It starts with a letter, and the subsequent characters include letters, numbers, and an underscore. Follows JavaScript naming rules.

var _myLastName$ = "Doe";//✔️
//? Explanation: This is a valid variable name. It starts with an underscore, and the subsequent characters include letters, numbers, and a dollar sign. Follows JavaScript naming rules.

var 123myAge = 25; // ❌
//? Explanation: This is not a valid variable name. It starts with a number, which is not allowed as per JavaScript naming rules. Variable names cannot begin with a digit.

var $cityName = "New York"; // ✔️
//? Explanation: This is a valid variable name. It starts with a dollar sign, and the subsequent characters include letters. Follows JavaScript naming rules.

var my@Email = "john@example.com"; // ❌
//? Explanation: This is not a valid variable name. It includes the special character '@', which is not allowed in JavaScript variable names. Only letters, numbers, underscores, and dollar signs are allowed.


//* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:
var myFavNum = -5;
console.log(myFavNum);

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
var myName = 'vinod';
console.log(myName);

//? Boolean: Represents a logical entity with two values: true or false.
// Example:
var isRaining = false;
var areYouAwesome = true;
console.log(isRaining, areYouAwesome);

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:
var vinod;
console.log(vinod);

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:
var badMemories = null;
console.log(badMemories);

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
const bigNumber = 1234567890123456789012345678901234567890n;

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
const mySymbol = Symbol("description");

//* ==========  Data Types End Section ==========


//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
const myString = "42";
const myNumber = parseInt(myString);
console.log(myNumber); // Output: 42

const myString = "42.5";
const myNumber = parseInt(myString);
console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
const myString = "42.5";
const myNumber = parseFloat(myString);
console.log(myNumber); // Output: 42.5


//? What is the purpose of the NaN value in JavaScript❓
//? NaN stands for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number.
//? Also, to check whether a value is number or not we can use isNaN() function.

console.log(isNaN("vinod"));
console.log(parseInt("xyz"));
console.log(parseInt("@#$"));

// //! NaN === NaN, Why is it false ❓
if (NaN == NaN) {
  console.log("both are equal ");
} else {
  console.log("not equal");
}

//* ========== parseInt & parseFloat End Section ==========


//* ============================
//* Data Types Section - part 2
//* ============================

//* Concatenation in JavaScript
//? In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together.
//? It's important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.

const str = "Hello " + "World";
console.log(str);

//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//! It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

let sum = "5" + 10;
console.log(sum);


//* ===================================
// *  EXPRESSIONS AND OPERATORS Section
//* ====================================

//? 1st we will see what is expression means and also what is operand and operator in any expression?

//* Types of Operators in JS
// Assignment operators
// Arithmetic operators
// In arithmetic we increment and decrement operator.
// Comparison operators
// Logical operators
// String operators
// Conditional (ternary) operator

//* ===================================
//* 1: Assignment operators
//* ====================================

//? Assignment operators in programming are symbols used to assign values to variables. They take the value on the right side of the operator and assign it to the variable on the left side.

// examples
var myFavNum = 15;
// Assigns the value 15 to the variable myFavNum
var channelName = 'thapa tecnical'

//* ===================================
//* 2: Arithmetic operators
//* ====================================

//? Arithmetic operators in programming perform basic mathematical operations on variables or values. They include addition, subtraction, multiplication, division, and modulus.

//? Addition (+): Adds two values or variables.
// Example:
var x = 5;
var y = 10;
var sum = x + y;
console.log(sum);

//? Subtraction (-): Subtracts the right operand from the left operand.
// Example:
var a = 10;
var b = 7;
var difference = a - b;
console.log(difference);

//? Multiplication (*): Multiplies two values or variables.
// Example:
var p = 4;
var q = 6;
var product = p * q;
console.log(product);

//? Division (/): Divides the left operand by the right operand.
// Example:
var m = 15;
var n = 3;
var quotient = m / n;
console.log(quotient);

//? Modulus (%): Returns the remainder when the left operand is divided by the right operand.
// Example:
var c = 17;
var d = 5;
var remainder = c % d;
console.log(remainder);

//* ===================================
//* 3: String Operators
//* ====================================

//? There are a few ways to concatenate strings in JavaScript. The most common way is to use the + operator. For example, to concatenate the strings "Hello" and "World", you would use the following code:

var str1 = "Hello";
var str2 = "World ";
var str3 = str1 + Str2;
console.log(str3);

//* ===================================
//* 4: comparison operators
//* ====================================

//? Comparison operators in JavaScript are used to compare values and return a Boolean result (true or false).

//? Equal (==): Checks if two values are equal, performing type coercion if necessary.
console.log(5 == "5");

//? Strict Equal (===):
// Checks if two values are equal without performing type coercion.
console.log(5 === "5");

//? Not Equal (!=   👉 ! =):
// Checks if two values are not equal, performing type coercion if necessary.
console.log(5 != 5);

//? Greater Than (>):
// Checks if the value on the left is greater than the value on the right.
// Example: 10 > 5 evaluates to true.
console.log(5 > 2);

//? Less Than (<):
// Checks if the value on the left is less than the value on the right.
// Example: 5 < 10 evaluates to true.
console.log(5 < 10);

//? Greater Than or Equal To (>=):
// Checks if the value on the left is greater than or equal to the value on the right.
// Example: 10 >= 10 evaluates to true.
console.log(10 >= 10);

//? Less Than or Equal To (<=):
// Checks if the value on the left is less than or equal to the value on the right.
// Example: 5 <= 10 evaluates to true.
console.log(5 <= 10);

//* ===================================
//* 5: Logical operators in JavaScript
//* ====================================

//* There are three main logical operators: && (logical AND), || (logical OR), and ! (logical NOT).

//? Logical AND (&&): Returns true if both operands are true, otherwise, it returns false.
// Example:
var x = 5;
var y = 10;
console.log(x > 0 && y < 0);

//? Logical OR (||): Returns true if at least one of the operands is true, otherwise, it returns false.
// Example:
var a = 15;
var b = 0;
console.log(a > 10 || b > 10);

//? Logical NOT (!):
//? Returns true if the operand is false, and false if the operand is true.
// Example:
var isOpen = false;
console.log(!isOpen);

//* ===================================
//* 6: Unary operator
//* ====================================
//? Unary operators in JavaScript are operators that work with only one operand. They perform various operations such as negation, incrementing, decrementing, type conversion, and more.

//? Unary Plus (+): Converts its operand into a number. If the operand is not already a number, it attempts to convert it.
console.log(+3);
console.log(+"5");

//? Unary Negation (-): Negates its operand, converting non-numbers into numbers and then negating them.
console.log(-5);
console.log(-"3");

//? Prefix Increment (++x) and Prefix Decrement (--x): In prefix form, the value of the operand is first incremented or decremented, and then the result is returned.
var x = 5;
var y = --x;
console.log(y);
console.log(x);

//? Postfix Increment (x++) and Postfix Decrement (x--): In postfix form, the value of the operand is first returned, and then it is incremented or decremented.
var x = 5;
var y = x++;
console.log(y);
console.log(x);

//todo The current value of x (which is 5) is assigned to y. After the assignment, the value of x is then incremented by 1.

//* ===================================
//* 7: Conditional (ternary) operator
//* ====================================

//? syntax: condition ? expressionIfTrue : expressionIfFalse;

// ! write a program to check if the candidates isEligibleForDrive or not? Age must be equal to or greater then 18.

var age = 19;
var result = age >= 18 ? "Yes" : "No";
console.log(result);

//! Q: Let say you have a variable score representing a student's exam score. If the score is greater than or equal to 60, the student passes; otherwise, they fail. Use the conditional (ternary) operator to determine the result and store it in a variable called result. Log the result to the console❓

var score = 99;
var result2 = score >= 60 ? "Pass" : "Fail";
console.log(result2);

//* ===============================
//* Conditional statement Section
//* ===============================

//* ===============================
//* If Statement
//* ===============================

//? If Else:  The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

//? Syntax
// if (condition) {
//   // Code to be executed if the condition is true
// } else {
//   // Code to be executed if the condition is false
// }

//? Let check the temperature
// var temperature = 25;
// if (temperature > 30) {
//   console.log("lets go to beach");
// } else {
//   console.log("tv dekhte hai yr");
// }

//? We can also use an else if clause to check additional conditions:
// var temperature = 15;
// if (temperature >= 30) {
//   console.log("lets go to beach");
// } else if (temperature >= 20 && temperature < 30) {
//   console.log("tv dekhte hai yr");
// } else {
//   console.log("kambhal oodo so jawo");
// }

//* ===============================
//* Interview Question
//* ===============================

//! Requirements:
//? If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//? If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//? If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//? If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
//? Extended voting eligibility checker with additional conditions

// Assume the user's age, citizenship status, and registration status as inputs
// let userAge = 19;
// let isCitizen = true; // Assume true for citizen, false for non-citizen
// let isRegistered = true; // Assume false for not registered, true for registered
// //! Check eligibility using if...else statements with multiple conditions

// if (userAge >= 18) {
//   if (isCitizen) {
//     if (isRegistered) {
//       console.log("You are eligible to vote");
//     } else {
//       console.log("You are not eligible due to registration status");
//     }
//   } else {
//     console.log("you are not eligible due to citizenship status");
//   }
// } else {
//   console.log("You are not eligible to vote (Younger)");
// }

//* ===============================
//* Interview Questions
//* ===============================
//! 1: Write a program to check if a number is even or odd.
var num = "7";
if (num % 2 === 0) {
  console.log("Num is even");
} else {
  console.log("Num is odd");
}

//! 2: Write a program to check if a number is prime.
//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.

var num = 13;
var isPrime = true;

for (var i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Num is prime");
} else {
  console.log("Num is not prime");
}

//! 3: Write a program to check if a number is positive, negative, or zero.
var num = -10;
if (num === 0) {
  console.log("Num is zero");
} else if (num > 0) {
  console.log("Num is positive ");
} else {
  console.log("Num is negative ");
}

//* ===============================
//* Switch Statement
//* ===============================

//? Switch Statement: The switch statement is used to perform different actions based on different conditions.
//? Syntax:
// switch (expression) {
//   case value1:
//     //   Code to be executed if expression === value1
//     break;

//   case value2:
//     //   Code to be executed if expression === value2
//     break;

//   //  More cases can be added as needed

//   default:
//   //  Code to be executed if none of the cases match
// }

//todo let's see the example
//! Explain how the switch statement works and what will be the output when the variable day is set to different values.

var day = "Friday";

switch (day) {
  case "Monday":
    console.log("today is monday");
    break;

  case "Friday":
    console.log("omg lets have party today");
    break;

  case "Sunday":
    console.log("Lets go to movie");
    break;

  default:
    console.log("no condition match");
}

//* ===============================
//* While Loop
//* ===============================

// ? While Loop: A while loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specified condition remains true. The loop continues iterating while the condition is true, and it terminates when the condition becomes false.

// while (condition) {
//   // Code to be executed as long as the condition is true
// }

//* Simple while loop to count from 1 to 10 🧑‍💻
var num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

//! practice 🧑‍💻
//? let's create a table of 5
// 5*1 = 5
// 5*2 = 10
// 5*2 = 10

var num = 1;
while (num <= 10) {
  console.log("5 * " + num + " = " + 5 * num);
    console.log(`5 * ${num} = ${5 * num}`);
  num++;
}

//* ===============================
//* Do-While Loop
//* ===============================

//? Do...While Loop: A do...while loop in JavaScript is similar to a while loop, but it guarantees that the loop body will be executed at least once before checking the loop condition. The loop continues to execute while the specified condition is true, and it terminates when the condition becomes false.

// Syntax: do {
//   // Code to be executed at least once
// } while (condition);

//* Simple do...while loop to count from 1 to 10 🧑‍💻

var num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}

var num = 1;
do{
    console.log(num);
    num++;
}while (num <= 10)

//* ===============================
//* For Loop
//* ===============================

//? For Loop: A for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. It's particularly useful when you know the exact number of iterations needed.

// example: for (initialization; condition; iteration) {
//   // Code to be executed in each iteration
// }
// Initialization: Executed before the loop starts. Often used to initialize a counter variable.
// Condition: Evaluated before each iteration. If false, the loop terminates.
// Iteration: Executed after each iteration. Typically used to update the loop control variable.

//* Simple for loop to count from 1 to 10

var num = 1;
do {
  console.log(num);
  num++;
} while (num <= 10);

for (var num = 1; num <= 10; num++) {
  console.log(num);
}

//! practice :
//! Calculate the sum of numbers from 1 to 10 using a for loop 🧑‍💻

var sum = 0;
//debugger;
for (var num = 1; num <= 10; num++) {
  var sum = sum + num;
}
console.log(sum);

//! Generating a Times Table:🧑‍💻
//! Example 3: Generating a times table of 5 with a for loop.
var num = 1;
while (num <= 10) {
  console.log("5 * " + num + " = " + 5 * num);
    console.log(`5 * ${num} = ${5 * num}`);
  num++;
}

for (var num = 1; num <= 10; num++) {
  console.log("5 * " + num + " = " + 5 * num);
}

//! Homework ➡️ JavaScript program to print table for given number (8,9,12,15) using for Loop?

//? More Practice
//!1: program To check if a year is a leap year🧑‍💻
//? If a year is divisible by 4 and not divisible by 100, or
//? If a year is divisible by 400,
// then it is a leap year. Otherwise, it is not a leap year.

var year = 2020;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year, "it's a leap year");
} else {
  console.log(year, "it's not a leap year");
}

//! 2: Drawing Patterns with Asterisks: 🧑‍💻

//*       i\j  1    2    3    4    5
//*       ----------------------------
//*       1    *    -    -    -    -
//*       2    *    *    -    -    -
//*       3    *    *    *    -    -
//*       4    *    *    *    *    -
//*       5    *    *    *    *    *

for (var i = 1; i <= 5; i++) {
  var pattern = "";
  for (var j = 1; j <= i; j++) {
    pattern = pattern + " *";
  }
  console.log(pattern);
}


//* ===============================
//* Function in JavaScript
//* ==============================
//? In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

//  3 students at a same time wants to find the sum of two numbers
// 1st student
// var a = 5,
//   b = 10;
// var sum1 = a + b;
// console.log(sum1);

// // 2nd student
// var a = 15,
//   b = 15;
// var sum2 = a + b;
// console.log(sum2);

// // 3rd student
// var a = 55,
//   b = 15;
// var sum3 = a + b;
// console.log(sum3);

// lets make a reusable code

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 5));
console.log(sum(15, 50));
console.log(sum(25, 750));

//* ===============================
//* Function Declaration:
//* ==============================

//? Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
//? This step defines the function and specifies what code should be executed when the function is called.

function greet() {
  console.log("Hello Guys, Welcome to Thapa Technical JS Course ");
}

//* =================================================
//* Function Invocation (Calling a Function):
//* =================================================

//?After declaring a function, you can invoke or call it by using its name followed by parentheses.
//? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.

//? How to call a function
greet();

//* ==============================
//* Function Parameter:
//* ==============================

//? A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allow you to pass information into a function, making it more versatile and reusable.

// Syntax: function functionName(parameter1, parameter2, ...params) {
//   // Function body
//   // Code to be executed when the function is called
// }

//* ==============================
//* Function Argument:
//* ==============================

//? A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

//? syntax:
//? functionName(argument1, argument2, ...);

//! Practice Time
//? Let's say we want to greet students with one same line
//! Write a JavaScript program that defines a function called greet to welcome individuals to the Thapa Technical JS Course. The function should take a name parameter and output the message "Hello [name], Welcome to Thapa Technical JS Course". Call the function twice, once with the argument "vinod" and once with the argument "ram".
function greet2(name) {
  console.log("Hello " + name + ", Welcome to Thapa Technical JS Course");
}

greet2("ram");
greet2("sita");

//* ==============================
//* Function expressions
//* ==============================
//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

var result3 = function sum2(a, b) {
  console.log(a + b);
};

result3(10, 15);

//* ==============================
//*  Anonymous Function
//* =============================
//? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

var result4 = function (a, b) {
  console.log(a + b);
};

result4(10, 15);

//* ==============================
//*  Return Keyword
//* =============================
//? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

//? Syntax
// return expression;

//! Example 1: Returning a Sum of two number

function sum3(a, b) {
    console.log(a + b);
  return a + b;
  console.log("hello I am function");
}

var result5 = sum3(5, 5);
console.log(result5);

console.log("the sum of two number is " + result5);

console.log(sum(5, 5));
console.log(sum(15, 50));
console.log(sum(25, 750));

//* ==============================
//* IIFE - immediately invoked function expression
//* =============================
//? An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately

// Syntax
// (function () {
//   // code to be executed
// })();

var result6 = (function (a, b) {
  console.log(a + b);
  return a + b;
})(5, 10);

console.log("the sum of two number is " + result6);

//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor
let fruits = new Array('apple', 'orange', 'banana')

//? Using array literal
let fruits = ["apple", "orange", "banana"];
console.log(fruits);

//? we can also create an empty array
let arr = [];
console.log(typeof arr);

//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.
let fruits = ["apple", "orange", "banana"];
console.log(fruits[3]);
console.log(fruits["apple"]);

//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

let fruits = ["apple", "orange", "banana"];
fruits[2] = "mango";
console.log(fruits);

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays

let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

for (let item of fruits) {
  console.log(item);
}

for (let item = 0; item < fruits.length; item++) {
  console.log(fruits[item]);
}

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

for (let item in fruits) {
  console.log(item);
}

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

const myForEachArr = fruits.forEach((curElem, index, arr) => {
  return `${curElem} ${index}`;
    console.log(arr);
});
console.log(myForEachArr);

// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

const myMapArr = fruits.map((curElem, index, arr) => {
  return ` my fav fruit is ${curElem} `;
    console.log(arr);
});

console.log(myMapArr);
console.log(fruits);

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)
let fruits = ["apple", "orange", "mango", "grapes", "banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.
console.log(fruits.push("guava"));
console.log(fruits);
// The push() method returns the new length.

//? 2: pop(): Method that removes the last element from an array.
console.log(fruits.pop());
console.log(fruits);

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
console.log(fruits.unshift("guava"));
console.log(fruits);

//? 4: shift(): Method that removes the first element from an array.
console.log(fruits.shift());
console.log(fruits);

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
let fruits = ["apple", "orange", "banana", "mango"];
fruits.splice(1, 1, "grapes");
console.log(fruits);

// //! what if you want to add the element at the end
fruits.splice(-1, 0, "grapes");
fruits.splice(1, 0, "grapes");
console.log(fruits);

//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
indexOf(searchElement);
indexOf(searchElement, fromIndex);
console.log(numbers.indexOf(4, 5));

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
const result = numbers.indexOf(6);
console.log(result);
const result1 = numbers.lastIndexOf(6);
console.log(result1);
const result = numbers.indexOf(6, 5);
console.log(result);

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
includes(searchElement);
includes(searchElement, fromIndex);

const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
const result = numbers.includes(5);
console.log(result);

//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

const result = numbers.find((curElem) => {
  return curElem > 6;
});

console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.map((curElem) => curElem * 5);
console.log(result);
const result2 = result.findIndex((curElem) => {
  return curElem > 15;
});
console.log(result2);

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = numbers.filter((curElem) => {
  return curElem > 4;
});

console.log(result);

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
let value = 6;
const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

let updatedCart = numbers.filter((curElem) => {
  return curElem !== value;
});

console.log(updatedCart);

// Practice time
// !Example 2: Filtering Products by Price
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 },
];
// // Filter products with a price less than or equal to 500

const filterProducts = products.filter((curElem) => {
  //   console.log(curElem.price <= 500);
  return curElem.price <= 500;
});
console.log(filterProducts);

// //! Filter unique values
const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
let uniqueValues = numbers.filter((curElem, index, arr) => {
    console.log(index);
    console.log(arr.indexOf(curElem));
  return arr.indexOf(curElem) === index;
});
console.log(uniqueValues);
console.log([...new Set(numbers)]);

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

const fruits = ["Banana", "Apple", "Orange", "Mango"];
const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];

console.log(numbers);

// ? compare callback function
// syntax
// const sortedNumbers = numbers.sort((a, b) => a - b);
// if(a>b) return 1  => switch the order
//  if(b>a) return -1  => keep the order

numbers.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});

console.log(numbers);

//? For ascending order
// const sortedNumbers = numbers.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  }
});

//? For descending order
// const sortedNumbers = numbers.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  }
});
//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
const numbers = [1, 2, 3, 4, 5];

//! Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];

let result = numbers.map((curElem) => curElem * curElem);
console.log(result);

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// Original array of strings
const words = ["APPLE", "banana", "cherry", "date"];

const result = words.map((curElem) => {
  return curElem.toLowerCase();
});

console.log(result);

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

// Original array of numbers
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((curElem) => {
    if (curElem % 2 === 0) {
      return curElem * curElem;
    }
  }).filter((curElem) => curElem !== undefined);

console.log(result);

const evenSquare = numbers.map((curNum) => (curNum % 2 === 0 ? curNum * curNum : undefined)).filter((curElem) => curElem !== undefined);

console.log(evenSquare);

//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".

const names = ["ram", "vinod", "laxman"];
const prefixName = names.map((curName) => `Mr. ${curName}`);
console.log(prefixName);

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

const productPrice = [100, 200, 300, 400, 500];

const totalPrice = productPrice.reduce((accum, curElem) => {
  return accum + curElem;
}, 0);

console.log(totalPrice);

//* =========================================
//* String in JavaScript
//* =========================================

//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.

// Note:
//? Strings created with single or double quotes works the same.
// There is no difference between the two.

//* String Properties:
//? length: Property that returns the length of the string (number of characters).

const str = "Hello,    World!";
console.log(str.length);
// including space n all

//* =========================================
//* Escape Character
//* =========================================

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash

// let text = "My name is " Thapa Technical " & I am a Full Stack Developer. ";
let text ="My name is ' Thapa Technical ' & \\ I am a \"Full Stack \" Developer. ";
// // let text = 'My name is " Thapa Technical " & I am a Full Stack Developer. ';

console.log(text);

//* =========================================
//* String Search Methods
//* =========================================

//? 2: String Search Methods
//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// syntax
indexOf(searchString)
indexOf(searchString, position)

let text = "Vinod Thapa";
console.log(text.indexOf("thapa"));
// The indexOf() method is case sensitive.
console.log(text.indexOf("Thapa"));

let strArr = Array.from(text);
console.log(strArr);
let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
console.log(strMap);

//? b: lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
lastIndexOf(searchString)
lastIndexOf(searchString, position)

let text = "Hello JavaScript, welcome to our world best JavaScript course";
let index = text.indexOf("JavaScript");
let index = text.lastIndexOf("JavaScript");
let index = text.lastIndexOf("JavaScript", 40);
console.log(index);

//? c:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.

let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.search(/Javascript/i);
console.log(result);

//*👉 Important Tips
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value

//? match() : Returns an array of the matched values or null if no match is found.

let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.match("Javascript");
let result = text.match("JavaScript");
todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag
let result = text.match(/Javascript/gi);

console.log(result);

//? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let matchResult = text.matchAll("javascript");
let matchResult = text.matchAll("JavaScript");
//todo  here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end

console.log(...matchResult);

for (let item of matchResult) {
  console.log(item[0]);
}

for (let index of matchResult) {
  console.log(index.index);
}

for (let { index } of matchResult) {
  console.log(index);
}

//? includes(): Returns true if the string contains the specified value, and false otherwise.
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let includeResult = text.includes(/java/i);
let includeResult = text.includes("J");
console.log(includeResult);

// Note: includes() is case sensitive. includes() is an ES6 feature.

//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.startsWith("Helcome");
let result = text.startsWith("Hello");
console.log(result);

//* start position for the search can be specified
let result = text.startsWith("welcome", 18);
let result = text.startsWith("welcome", 17);
console.log(result);

//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.endsWith("welcome");
let result = text.endsWith("course");
console.log(result);

//* =========================================
//* Extracting String Parts:
//* =========================================
//! Extracting String Parts:

//? String.prototype.substr() it is deprecated  ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
// slice(start, end);

// Todo  JavaScript counts positions from zero.
//? First position is 0. Second position is 1.

let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.slice(6);
let result = text.slice(6, 15);
console.log(result);

// subString() substring()

//? a: substring: Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.slice(-6);
console.log(result);

//! Homework
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.substring(0);
let result = text.substring(1);
let result = text.substring(-5);
console.log(result);

//! similarities
//todo  In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.

//* =========================================
//* Extracting String Characters
//* =========================================
//! Extracting String Characters
// There are 3 methods for extracting string characters:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(position) Method

//? charAT() : The charAt() method returns the character at a specified index (position) in a string
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.charAt(6);
let result = text.charAt(-6);
console.log(result);

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.charCodeAt(6);
console.log(result);

//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.at(-6);
console.log(result);

//todo Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).

//* =========================================
//* Replacing String Content:
//* =========================================
//! Replacing String Content:
//? replace() : The replace method is used to replace a specified value with another value.
const str = "Hello, World!";
const newStr = str.replace("World", "JavaScript");
console.log(newStr); // Outputs: Hello, JavaScript!

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
let originalString = "Hello, World! How are you, World?";
let replacedString = originalString.replace(/world/gi, "vinod");
console.log(replacedString);

//* =========================================
//* Other Useful Methods:
//* =========================================

//! Other Useful Methods:
//? toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
const str = "JavaScript";
console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
console.log(str.toLowerCase()); // Outputs: javascript

//? trim: Removes whitespace from both ends of the string.
const str = "   Hello, World!   ";
console.log(str.length);

let trimStr = str.trim();
console.log(trimStr);
console.log(trimStr.length);

//? split: Splits the string into an array of substrings based on a specified delimiter.
const str = "apple,orange,banana";
let strArr = str.split(",").reverse().join();
console.log(strArr);

//* =========================================
//* Math Object in JavaScript
//* =========================================

//* Math: The Math namespace object contains static properties and methods for mathematical constants and functions.
//* Math works with the Number type. It doesn't work with BigInt.

//? 1: Constants:
//* - Math.PI: Represents the mathematical constant Pi (π).
const piValue = Math.PI;
console.log(piValue);

//* =========================================
//* 2. Basic Operations:
//* =========================================

//? Math.abs(): The Math.abs() static method returns the absolute value of a number.
// or in simple, how far the number is from 0. It will be always positive

console.log(Math.abs(5));
console.log(Math.abs(-115));

//? Math.round(x): Rounds a number to the nearest integer.
const roundedValue = Math.round(3.7);
console.log(roundedValue);

//? Math.ceil(x): Returns the value of x rounded up to its nearest integer:
const ceilValue = Math.ceil(3.7);
console.log(ceilValue);

//? Math.floor(x): Returns the value of x rounded down to its nearest integer.
const floorValue = Math.floor(3.7);
console.log(floorValue);

//? Math.trunc(x): Returns the integer part of x:
const truncValue = Math.trunc(3.7);
console.log(truncValue);

//todo Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.
const truncValue = Math.trunc(-3.7);
const floorValue = Math.floor(-3.1);
console.log(truncValue);
console.log(floorValue);

//todo Notes:
// No matter how many chars are there after decimal, they all will always return only number before the decimal.
// round rounds to the nearest integer.
// floor always rounds down.
// ceil always rounds up.

//* =========================================
//* 3. Exponential and Logarithmic Functions:
//* =========================================

//? Math.pow(x, y): Returns the value of x to the power of y.
console.log(Math.pow(2, 5));
console.log(2 ** 5);

//? Math.sqrt(): Math.sqrt(x) returns the square root of x:
let squareRoot = Math.sqrt(25);
console.log(squareRoot);

//? Math.log(x) returns the natural logarithm of x.
let logResult = Math.log(1);
let logResult = Math.log(2);
console.log(logResult);

//? Math.log2(x) returns the base 2 logarithm of x.
let logResult = Math.log2(8);
console.log(logResult);

//* =========================================
//* Interview Question
//* =========================================

//! Generate Random number
//? Math.random(): Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

console.log((Math.random() * 100).toFixed(3));


//* =========================================
//* Date & Time Objects in JavaScript
//* =========================================

//? Date() constructor: The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.

//? Creating a Date Object:
// You can create a new Date object using the new keyword. It can be done in several ways:
//todo There are 9 ways to create a new date object:

// Syntax
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

//? Current date and time
//? new Date(): Creates a Date object representing the current date and time.
const currentDate = new Date();
console.log(currentDate);
//todo  This is the ISO 8601 format, which is a standard for representing dates and times. In this format, the date and time are represented together, separated by the letter "T". The "Z" at the end indicates that the time is in UTC (Coordinated Universal Time).

// But the same when you run on browser it will return more human-readable format.

//? 2: new Date(dateString): Creates a Date object based on the provided date string.
const dateString = "2024-02-19T10:44:09.274Z";
const dateFromString = new Date(dateString);
console.log(dateFromString);

//? 3: new Date(year, month): Creates a Date object with the specified year and month.
const date1 = new Date(2025, 12);
console.log(date1);

//? 4: new Date(year, month, day): Creates a Date object with the specified year, month, and day.
const date2 = new Date(2024, 1, 19);
console.log(date2);

//? 5: new Date(year, month, day, hours): Creates a Date object with the specified year, month, day, and hours.
const date3 = new Date(2024, 1, 19, 10);
console.log(date3);

//? 6: new Date(year, month, day, hours, minutes): Creates a Date object with the specified year, month, day, hours, and minutes.
const date4 = new Date(2024, 1, 19, 10, 44);
console.log(date4);

//? 7: new Date(year, month, day, hours, minutes, seconds): Creates a Date object with the specified year, month, day, hours, minutes, and seconds.
const date5 = new Date(2024, 1, 19, 10, 44, 9);
console.log(date5);

//? 8: new Date(year, month, day, hours, minutes, seconds, ms): Creates a Date object with the specified year, month, day, hours, minutes, seconds, and milliseconds.
const date6 = new Date(2024, 1, 19, 10, 44, 9, 274);
console.log(date6);

//? 9: new Date(milliseconds): Creates a Date object representing the number of milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).
const curMilliSeconds = new Date().getTime();
const milliseconds = 1632090690883; // Example milliseconds
const dateFromMilliseconds = new Date(curMilliSeconds);
console.log(dateFromMilliseconds);


//* ==================================================
//* JavaScript Get Date Methods / Getting Components:
//* ===================================================

// You can get various components of a date using the methods of the Date object:
const currentDate = new Date();
// //? In a date object, the time is static.
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // 0-based index
const date = currentDate.getDate();
const day = currentDate.getDay();
console.log(currentDate);
console.log(day);
// In JavaScript, the first day of the week (day 0) is Sunday.
// day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)

//* ==================================================
//* JavaScript Set Date Methods / Setting Components:
//* ===================================================

const date = new Date();

//? setFullYear(yearValue[, monthValue[, dayValue]]): Sets the full year for a specified date according to local time.
console.log(date);

date.setFullYear(2025);
console.log(date); // Date object with the year set to 2025

//? setMonth(monthValue[, dayValue]): Sets the month for a specified date according to local time.
date.setMonth(5); // June (months are zero-based)
console.log(date); // Date object with the month set to June

//? setDate(dayValue): Sets the day of the month for a specified date according to local time.
date.setDate(15);
console.log(date); // Date object with the day of the month set to 15

//* ==================================================
//* JavaScript Get Time Methods / Getting Components:
//* ===================================================
const currentTime = new Date();

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();
const time = currentTime.getTime();
console.log(time);

//* ==================================================
//* JavaScript Set Time Methods / Getting Components:
//* ===================================================

// const date = new Date();

//? setHours(hourValue[, minuteValue[, secondValue[, millisecondValue]]]): Sets the hours for a specified date according to local time.
date.setHours(10);
console.log(date); // Date object with the hours set to 10

//? setMinutes(minuteValue[, secondValue[, millisecondValue]]): Sets the minutes for a specified date according to local time.
date.setMinutes(30);
console.log(date); // Date object with the minutes set to 30

//? setSeconds(secondValue[, millisecondValue]): Sets the seconds for a specified date according to local time.
date.setSeconds(45);
console.log(date); // Date object with the seconds set to 45

//? setMilliseconds(millisecondValue): Sets the milliseconds for a specified date according to local time.
const date = new Date();

date.setMilliseconds(500);
console.log(date); // Date object with the milliseconds set to 500

//? setTime(timeValue): Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
const date = new Date();
date.setTime(1832090690883);
console.log(date); // Date object representing the specified time

//* ================================================================
//* A few useful methods of the Date object in JavaScript
//* ================================================================

//? 1: toLocaleString(): Returns a string representing the date and time portion of a Date object using the current locale's conventions.
// const date = new Date();
// const localString = date.toLocaleString();
// console.log(localString); // Example output: "2/19/2024, 4:30:00 PM" (depending on the locale)

//? 2: toLocaleDateString(): Returns a string representing the date portion of a Date object using the current locale's conventions.
// const date = new Date();
// const localDateString = date.toLocaleDateString();
// console.log(localDateString); // Example output: "2/19/2024" (depending on the locale)

//? 3: toLocaleTimeString(): Returns a string representing the time portion of a Date object using the current locale's conventions.
// const date = new Date();
// const localTimeString = date.toLocaleTimeString();
// console.log(localTimeString); // Example output: "4:30:00 PM" (depending on the locale)

//? 5: parse(): Parses a string representation of a date and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
// const dateString = "2024-02-19T16:30:00Z";
// const parsedDate = Date.parse(dateString);
// console.log(parsedDate); // Example output: 1703254200000 (milliseconds)

//* ==================
//* //* Bonus
//* =================

let newDate = new Date();
console.log(Date.now());
console.log(newDate.getTime());

//? Date.now() is a static method of the Date object.
//? Use Date.now() if you want the timestamp right this second.
//? It returns the current timestamp (number of milliseconds) representing the current moment.
//? Use new Date().getTime() if you have an existing Date object from elsewhere and want its timestamp.


//* ==============================
//* LocalStorage
//* ==============================

//? The localStorage object allows you to save key/value pairs in the browser.

// How to add the data from localStorage
localStorage.setItem("youtubeJsCourse", "addingData");

// How to get the data from localStorage
localStorage.getItem("youtubeJsCourse");

// How to remove the data from localStorage
localStorage.removeItem("youtubeJsCourse");

//todo Local Storage can only store strings, so when you want to store a complex data structure like an array or an object, you need to convert it to a string using JSON.stringify:

//* JSON.stringify: Converts a JavaScript object into a JSON string.
// Useful when you want to send data to a server or store it in a text file, as JSON is a common data interchange format.
const data = { name: "Vinod", age: 30, city: "pune" };
const jsonString = JSON.stringify(data);
console.log(jsonString);
// Output: '{"name":"Vinod","age":30,"city":"pune"}'

//* JSON.parse: Converts a JSON string into a JavaScript object.
// Useful when you receive JSON data from a server or read it from a file, and you want to work with it as a JavaScript object.

const jsonString = '{"name":"Vinod","age":30,"city":"pune"}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData);
// Output: { name: 'Vinod', age: 30, city: 'pune' }
