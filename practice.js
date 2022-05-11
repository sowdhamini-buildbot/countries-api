//primitive data types
let name = "JOHN"; //string - a sequence of characters ,numbers or symbols
let age = 23; //number
let numberIsChecked = true; //boolean - boolean returns either true or false
let color; //undefined
// let color = null;

//derived data types
//function - function is a set of statements that performs particular task
function addition(a, b) {
  var c = a + b;
  console.log(c);
}
addition(4, 5);

//array - stores the list of items
let colors = ["blue", "green", "red"];
console.log(colors);

//object
let person = {
  name: "sowdhamini",
  age: 24,
};
console.log(person.name);

//if statement
var ageLimit = 18;
if (ageLimit >= 18) {
  console.log("allowed");
} else {
  console.log("not allowed");
}

//if else statement
var marks = 50;
if ((marks = 50)) {
  console.log("average");
} else if ((marks = 75)) {
  console.log("good");
} else {
  console.log("fail");
}

//switch
var value = 5;
switch (value) {
  case 5:
    console.log("value is 5");
    break;
  case 15:
    console.log("value is 15");
    break;
  case 25:
    console.log("value is 25");
    break;
}

//for loop
var i = 0;
for (i = 1; i <= 2; i++) {
  console.log(i);
}

//while loop
var j = 0;
while (j < 4) {
  console.log(j);
  j++;
}

//do while loop
// var s = 5;
// do {
//   console.log(i);
//   i++;
// } while (s < 4);

//break
var i = 0;
for (i = 1; i <= 5; i++) {
  console.log(i == 3);
  break;
}

//string methods -
//length - returns the length of the string
console.log(name.length);

//replace - replace the specified value with another value in the string
console.log(name.replace("JOHN", "shawn"));

//lowercase - string is converted to lower case letters
console.log(name.toLowerCase());

//uppercase - string is converted to upper case letters
console.log(name.toUpperCase());

//concat - two or mores strings
console.log(name.concat("", "hi"));

//charat - returns the character of the specified index
console.log(name.charAt(2));

//number methods
//tostring - returns the number as the string
console.log(age.toString());

//tofixed - returns the string with specified index
console.log(age.toFixed(2));

//toprecision() - returns the string with specified length
console.log(age.toPrecision(2));

//valueOf - returns the value as a number
console.log(age.valueOf());

//parseint - parses a string returns whole number
console.log(parseInt("10.33"));

//parsefloat - parses a string returns number
console.log(parseFloat("10.33"));

//max-value - returns the largest number
console.log(Number.MAX_VALUE);

//min-value - returns the smallest number
console.log(Number.MIN_VALUE);

//positive infinity - returns the infinity value
console.log(Number.POSITIVE_INFINITY);

//negative infinity - returns the negative value
console.log(Number.NEGATIVE_INFINITY);

//nan - returns the not a number
console.log(Number.NaN);

//array methods -
//toString - converts a array into string elements
console.log(colors.toString());

//join - join the all elements the string
console.log(colors.join("*"));

//pop - removes the last element in the array and returns it
console.log(colors.pop());

//push - adds the new element in the array at the end returns the length
console.log(colors.push("yellow"));

//shift - removes first array element and returns it
console.log(colors.shift());

//unshift - add new element at the begiinning and returns the length
console.log(colors.unshift("yellow"));

//delete - delete the elements and shows undefined
console.log(colors.delete);

//length - returns the length
console.log(colors.length);

//concat - joins the existing one and new array

//splice - add the new items to array or remove the element
console.log(colors.splice(0, 1, "pink"));

//slice - creates a new array
console.log(colors.slice(1));

//
