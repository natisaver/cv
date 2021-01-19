var randomnumber1 = Math.ceil(Math.random() * 6);
var source1 = "images/dice" + randomnumber1 + ".png";
var domsource1 = document.querySelector(".dice .img1dice").setAttribute("src", source1);

var randomnumber2 = Math.ceil(Math.random() * 6);
var source2 = "images/dice" + randomnumber2 + ".png";
var domsource2 = document.querySelector(".dice .img2dice").setAttribute("src", source2);


if(randomnumber1>randomnumber2) {
	document.querySelector(".dicechallenge .whowin").innerHTML = "YOU WINNN";
	document.querySelectorAll(".dicechallenge p")[0].innerHTML = "you🎉🎊";
	document.querySelectorAll(".dicechallenge p")[1].innerHTML = "me🤡";
}
else if(randomnumber2>randomnumber1){
	document.querySelector(".dicechallenge .whowin").innerHTML = "LOSERRRR HAHAHA";
	document.querySelectorAll(".dicechallenge p")[1].innerHTML = "me🎉🎊";
	document.querySelectorAll(".dicechallenge p")[0].innerHTML = "you🤡";
}
else {
	document.querySelector(".dicechallenge .whowin").innerHTML = "lucki oni";
	document.querySelectorAll(".dicechallenge p")[0].innerHTML = "you⚖️";
	document.querySelectorAll(".dicechallenge p")[1].innerHTML = "me⚖️";
}



// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
// document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
// document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
// document.querySelector("h1").innerHTML = "Draw!";
// }
