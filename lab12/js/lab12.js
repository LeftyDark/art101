// Lab 12 Conditionals
// A Javascript file making sure of conditionals such as if and else statements.
// @author Ryan McCarty and Darren Yang
// @link: https://leftydark.github.io/art101/lab10/js/lab12.js
// @since  11.15.2021
function sortingHat(str) {
  //A function that takes a string and sorts it into a hogwarts house based on the modulus of its length.
  var sortString = str;
  var stringLength = sortString.length;
  var modString = stringLength % 4;
  console.log(modString);
  if (modString == 0) {var yourHouse = "Gryffindor"}
  else if (modString == 1) {var yourHouse = "Ravenclaw"}
  else if (modString == 2) {var yourHouse = "Hufflepuff"}
  else if (modString == 3) {var yourHouse = "Slytherin"}
  else {var yourHouse = "Something went wrong!"};
  console.log(yourHouse);
  return yourHouse;
}

$("#button").click(function() {
  //This makes the sorting hat function run on the input when submit is hit.
  var yourString = $("input").val();
  console.log(yourString);
  var yourHouse = sortingHat(yourString);
  var finalString = "Your house is " + yourHouse;
  console.log(finalString);
  $("#output").text(finalString)
})
