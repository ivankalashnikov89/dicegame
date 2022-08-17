//Reload the game
function refreshPage(){
    //random numbers
var numberOne=Math.floor(Math.random()*6)+1;
var numberTwo=Math.floor(Math.random()*6)+1;

//connection random numbers and images
var diceImageOne="dice" + numberOne +".jpeg"
var diceImageTwo="dice" + numberTwo +".jpeg"

//image source
var imageSourceOne="images/" + diceImageOne;
var imageSourceTwo="images/" + diceImageTwo;

//DOM
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src", imageSourceOne);
image2.setAttribute("src", imageSourceTwo);


//Displays who won the game
if(numberOne > numberTwo) {
    document.querySelector("h1").innerText= "Player 1 wins!";
} else if(numberOne < numberTwo) {
    document.querySelector("h1").innerText= "Player 2 wins!";
} else {
    document.querySelector("h1").innerText="Draw!";
}
} 