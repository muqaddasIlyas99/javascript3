                                                 // Arrays

// Array koi type nhi hoti ya khd 1 object h.Arary is a special type of objects which are also called non-primirtive.the basic difference between them is object has key:value and the arrays have index(which is start from 0).


// let marks = [23,34,55,76,786,575,456,43];
// console.log("the list of marks is=", marks);
// for checking arrays length
// console.log(marks.length);  //property hmyen bs 1 value deti h and method jo proper 1 kaam krta h.
// let heroes = ["Superman", "Batman", "Spider-Man", "Iron Man", "Thor", "Hulk", "Captain America", "Black Panther", "Wonder Woman", "Flash"];

// console.log(heroes);
// console.log(heroes.length);
// Array Indices.....we can say its Arrays plural-Form.its use for check the position of an single array.For example:
// console.log (marks[0]); 
// we can also change the value of arrays by its position For example. 
// console.log(marks[4]=56);//array[4]=56  
// But in strings case its not possible to change the value of annother string in JS strings are immutable we cannot change .but array is mutable in js.we can change the value of array . particular index pa ja k arrays ki value ko change krsktty hn but particular index pa ja k string kimvslue ko change nhi krskty. agr hm sb namu ko 1 1 kr k print krwayen or hoskta h enki length 1000 ho to ya timeconsuming also taking a lot of memory.to es k liy hm loops ka use krty hn.
// Looping over an item. print all elements of an array.// 
// loops are used in iterates.iterate have strings objects Arrays.these are collection of items . we can use here for loops while loops also do-while loop.for arrays we have a special property this is "lenght".
// print this array by using for loop.Loops are Frequently used with arrays.
// let heroes = ["Superman", "Batman", "Spider-Man", "Iron Man", "Thor", "Hulk", "Captain America", "Black Panther", "Wonder Woman", "Flash"];

// console.log(heroes);
// for(let idx=0; idx< heroes.length; idx++){ //here idx is an variable with the seat of i.
//     console.log(heroes[idx]);
// }
// For this we can also use for-of as-well-as for-in loop also...heroes.but generally we use for-of loop.
// Using FOr-of loop the example of for-of loop is.
// uniqueNumbers = [1,2,3,4,5,5,6,7,7,8,]
// for (let value of uniqueNumbers) {
//     console.log(value);
// }
// for (let el of heroes){
//     console.log(el);
// }
// for(let num of marks){
//     console.log(num);
// }
// let cities = ["lahore","karachi","mumbai","Kolkata","sialkot"];
// for(let city of cities){
//     console.log(city.toUpperCase());//if i want to show the 1st letter in uppecase then i write here...city.toUpperCase();
// }
let marks=[85,97,44,37,76,60]
 let sum = 0;
 for(let val of marks){
  sum = sum+val;
 } 
 let avg = sum/marks.length;
 console.log(`average marks of the class =  $ {avg}`);

// function hello(){
//    console.log("hello world");     
// }
// hello()













































































































































