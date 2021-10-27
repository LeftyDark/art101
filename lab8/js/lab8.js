/*
 Lab 8 Anonymous Functions and Callbacks Javascript file
 A Javascript file including a function using a callback to add seven to an inputted number, and mapping an array to use that function both using the function and doing it using an anonymous function.
 @link   https://leftydark.github.io/art101/lab8/js/lab.js
 @file   C:\Users\ryanm\Documents\GitHub\art101\lab8\js\lab.js
 @author Ryan McCarty and Darren Yang
 @since  10.27.2021
*/
var myArray = [7,63,23,45,1223,6]; //The array that the functions will be used on.
function addSeven(x){
  //The function that takes an inputted number and adds seven to it.
var results = x + 7;
return results
}
console.log("Adding 7 to 7: " , addSeven(7));
console.log("Adding 7 to 13: " , addSeven(13));
console.log("myArray: " , myArray);
console.log("myArray+7: " , myArray.map(addSeven));
var mappedArray = myArray.map(function(x) {
var addedSeven = x + 7;
return addedSeven;});
console.log("myArray+7 using an anonymous function: " , mappedArray);
