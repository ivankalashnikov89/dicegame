//players' names
var playerOne = prompt("Write your name:");
var playerTwo = prompt("Write your name:");

//transfering prompts to h1
document.getElementById("playerOne").innerHTML=playerOne;
document.getElementById("playerTwo").innerHTML=playerTwo;

//Starting score
var scoreOne=0;
var scoreTwo=0;

//applying score vars to p elements
document.getElementById("scoreOne").innerHTML=scoreOne;
document.getElementById("scoreTwo").innerHTML=scoreTwo;

//divs with buttons
const refreshBtn=document.getElementById("refreshDiv");
const rollTheDice=document.getElementById("rollTheDice");

//Roll the dice
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
    document.querySelector("h1").innerText= "One point for " + playerOne;
    document.getElementById("scoreOne").innerHTML=scoreOne=scoreOne+1;
} else if(numberOne < numberTwo) {
    document.querySelector("h1").innerText= "One point for " + playerTwo;
    document.getElementById("scoreTwo").innerHTML=scoreTwo=scoreTwo+1;
} else {
    document.querySelector("h1").innerText="Draw!";
}

//Displaying who the winner is
if(scoreOne === 10) {
    document.querySelector("h1").innerText=playerOne + " is a winner!";
    //exchange buttons
    refreshBtn.style.visibility="visible";
    rollTheDice.style.visibility="hidden";
} else if(scoreTwo === 10) {
    document.querySelector("h1").innerText=playerTwo + " is a winner!";
     //exchange buttons
     refreshBtn.style.visibility="visible";
     rollTheDice.style.visibility="hidden";
}
} 

//Start new game
function refresh() {
    window.location.reload();
}