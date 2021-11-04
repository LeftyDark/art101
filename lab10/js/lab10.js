// Lab 10 JavaScript Events and Forms
// A Javascript file with commands to function for the Web.
// @author Ryan McCarty and Darren Yang
// @link: https://leftydark.github.io/art101/lab10/js/lab10.js
// @since  11.03.2021
function sortName(name) {
  // A function that takes a string inputted by a user and sorts it by turning it into an array, sorting that array, then turning it back into a string.
  //Took this from my lab7 with a slight edit to have it take a prexisting name at the start rather than asking for input upon running the function.
  let inputtedName = name;
  console.log("name =", inputtedName);
  let nameArray = inputtedName.split('');
  console.log("name array =", nameArray);
  let sortedArray = nameArray.sort();
  console.log("sorted array =", sortedArray);
  let sortedName = sortedArray.join('');
  console.log ("sorted name =", sortedName);
  return sortedName;
}
//Telling the JavaScript about the button
let myButton = document.getElementById("my-button");
//The event listener to take the inputted name, sort it, and then change the output div in the HTML to the newly sorted name.
myButton.addEventListener('click', function() {
  var nameOutput = sortName(document.getElementById('user-name').value);
  var output = document.getElementById("output");
  output.innerHTML = nameOutput;
})
