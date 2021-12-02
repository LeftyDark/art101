/*
 * Author: Ryan McCarty and Darren Yang
 * Created:  1 December 2021
 * License: Public Domain
 */



function putTextOnOutput(text){
  $("#output").html(text);
}

function putTextBelowOutput(text){
  $("#belowOutput").html(text);
}
function putImgOnPage(img){
  $("#imgZone").html("<img src= " + img + ">");
}

function getAPIData() {
  console.log("Pls work");
  $.ajax({
    // The URL for the request
    url: "https://xkcd.com/1481/info.0.json",
    // The data to send (will be converted to a query string)
    data: {

    },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // If the request succeeds
    success: function( data ) {
      // turn data object into string just so we can display it
      // and look at it and understand WTF is going on.
      var comicObj = data;
      console.log(comicObj);
      var comicTitle = comicObj.title;
      var comicImg = comicObj.img;
      var comicAlt = comicObj.alt;
      console.log(comicTitle, comicImg, comicAlt);
      var textData = JSON.stringify(data);

      // let's build up a string to display on our page
      var str = "";
      // let's get the individual values from data object
      // building our string for display using HTML
      str += textData;
      // put our html string on our page using our helper function
      console.log(str);
      putTextOnOutput(comicTitle);
      putImgOnPage(comicImg);
      putTextBelowOutput(comicAlt);
      // on the console, we can see whaz up
      console.log("Success:", textData);
    }
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
    console.log("Failure.");
    putTextOnPage(errorThrown + " Status:" + status);
  })
}
getAPIData();
