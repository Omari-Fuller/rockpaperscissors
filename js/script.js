// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


function computerChoice(number){
  if (number > 6) {
    return "Rock"
  }
 if (number > 3 && number < 6) {
 return "paper"

 }
 else if (number <=3) {
   return "scissors"
 }
}


// DOCUMENT READY FUNCTION BELOW
$("button").click(function() {
    let x = $("#input").val()
    $("#userChoice").html(x)
})