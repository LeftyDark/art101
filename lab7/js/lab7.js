/*
 Lab 7 Functions Javascript file
 A Javascript file including a basic function sorting a name inputted by the user.
 @link   https://leftydark.github.io/art101/lab7/js/lab.js
 @file   C:\Users\ryanm\Documents\GitHub\art101\lab7\js\lab.js
 @author Ryan McCarty and Darren Yang
 @since  10.24.2021
*/

function sortName() {
  // A function that takes a string inputted by a user and sorts it by turning it into an array, sorting that array, then turning it back into a string.
  let inputtedName = window.prompt("Hello! Please type your name here so it can be sorted.");
  console.log("name =", inputtedName);
  let nameArray = inputtedName.split('');
  console.log("name array =", nameArray);
  let sortedArray = nameArray.sort();
  console.log("sorted array =", sortedArray);
  let sortedName = sortedArray.join('');
  console.log ("sorted name =", sortedName);
  return sortedName;
}
document.writeln("Here's your brand new sorted name! ", sortName(), "</br>");
