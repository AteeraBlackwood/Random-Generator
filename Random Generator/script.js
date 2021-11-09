
var heading;
var executeButton;
var outputParagraph;
var inputElement;

var fortune = ["a pinafor", "a silver necklace", "doc martins", "skinny jeans", "a beret", "ballet flats", "big hoop earrings", "a crop top", " a jumpsuit", "hammer pants", "suspenders", "a t-shirt", "an ascot", "a bow tie", "a top hat", "skinny jeans", "a three-piece suit"]

document.addEventListener("DOMContentLoaded", function(){

  heading = document.getElementById("title");
  executeButton = document.getElementById("executeButton");
  outputParagraph = document.getElementById("outputText");
  inputElement = document.getElementById("myInput");

  executeButton.addEventListener("click", function(){
    generateFortune();
  });
})

  function generateFortune(){
    var currentInputText = inputElement.value;
    var randomFortuneIndex = Math.floor(Math.random()*fortune.length);
    var randomFortuneIndex2 = Math.floor(Math.random()*fortune.length);
    outputParagraph.innerHTML = currentInputText + " should wear "+ fortune[randomFortuneIndex] + " and " + fortune[randomFortuneIndex2]  ;

    styleChange();

  }

function styleChange(){
//Font color set
  var randomRed = Math.random() * 255;
var randomGreen = Math.random() * 255;
var randomBlue = Math.random() * 255;
var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

//Background set
var randomRed2 = Math.random() * 255;
var randomGreen2 = Math.random() * 255;
var randomBlue2 = Math.random() * 255;
var outputColorString2 = "rgb(" + randomRed2 + "," + randomGreen2 + "," + randomBlue2 + ")";

//Font set
var sizing = Math.random() * 50;
var sizingString = "textsize:(sizing)px"

outputParagraph.style.color = outputColorString;
outputParagraph.style.backgroundColor = outputColorString2;
outputParagraph.style.textSize = sizingString;

}
