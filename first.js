// Variables and its keywords in JavaScript let const var.(change the value of let but not change the value of const).
// variables is a container for storing data values. In JavaScript, variables are declared using the var keyword. Variables are used to store data that can be used later in the program. Variables can store different types of data, such as numbers, strings, and objects.
name = "John";
console.log(name);
number = 10;
console.log(number);    
// for printout the variable we use double quotes.
console.log("number");
// null and undefined we also used for example null is used to indicate that a variable has no value. Undefined is used to indicate that a variable has not been assigned a.....pta to h k kia h but es ma 1 khali value h ......and for undefined pta e nhi k kia h.
x = null;
console.log(x);
y = undefined; 
console.log(y);
// in programming equal sign is used for assignment operator. and also a=b its means that a is assigned to b. b ki value a ma store ho jae gi.and javascript is case sensitive language. it means that the variable name is case sensitive. A variable named "name" is different from a variable named "Name".SPACE is not allowed in variable name.RESERVED WORDS are not allowed in variable name. reserved words are those words which are already used in javascript.for example var, let, const, function, if, else, while, for, break, continue, return, switch, case, default, etc. camelCase is used for naming variables. camelCase is a naming convention in which the first letter of the first word is lowercase, and the first letter of each subsequent word is capitalized. for example firstName, lastName, age, etc. with variables name we use var, let, const. var is used for global scope. let is used for block scope. const is used for constant value. we can change or update the value of let.like (let age =34;) after that we can update this age=94; also age =45;  constant value is that value which is not changed. for example const pi = 3.14; pi is a constant value.these are keywords.   javascript new standard is ES6(Echnma Standard 6). in any programming block means curly brasis.
// Data types in JavaScript: primitive (7) and non-primitive data types.null, undefined, string, number, boolean, symbol, bigint. in the last of bigint we use n. for example let x = 1234567890123456789012345678901234567890n; 
let firstName = "John";
console.log(firstName);
let age = 25;
console.log(age);
let a;
a = 10;
console.log(a);
let x = BigInt(1234567890123456789012345678901234567890);
console.log(x); 
// Non-Primitive block: object, array, function. object is a collection of key-value pairs.
const student = {
    name: 'himanshu',
    age: 25,
    courses: ['Math', 'English'],
    isStudent: true,
};  
student.name = 'himanshu';
console.log(student.name);
student.age = 25;
console.log(student.age);