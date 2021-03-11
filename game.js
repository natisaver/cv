var gamePattern = [];
var colours = ["red","blue","green","yellow"];

var emptyArray = [];

var start = false;
var level = 0;

$("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

//Check if Game started, via keyboard press
$(document).keypress(function() {
    if(!start){
        start = true;
        nextSequence();
    }
});

//Audio Function
function playSound(input) {
    var audio = new Audio('./sounds/' + input + '.mp3');
    audio.volume = 0.7

    audio.play();   
  
}






//Clicked Animation Function
function Clicked(item) {
    $("#" + item).addClass("pressed");

    var delayInMilliseconds = 400; //1 second = 1000

    setTimeout(function() {
        $("#" + item).removeClass("pressed")
    }, delayInMilliseconds);
}

//please press key to start game warning
function Warning() {
    $("#title").addClass("warning");

    var delayInMilliseconds = 200; //1 second = 1000

    setTimeout(function() {
        $("#title").removeClass("warning")
    }, delayInMilliseconds);
}

//Click Handler Function (if/else to warn user if game not started)
$(".button").click(function() {
    if(!start) {
        //store the id of the button clicked (this) into var
        var userChosenColour = $(this).attr("id");

        //audio
        playSound(userChosenColour);

        //animate
        Clicked(userChosenColour);

        //addwarning
        Warning();

    }

    else{
        //store the id of the button clicked (this) into var
        var userChosenColour = $(this).attr("id");

        //array
        emptyArray.push(userChosenColour);

        //audio
        playSound(userChosenColour);

        //animate
        Clicked(userChosenColour);

        //comparison check
        Compare();
    }
    


});



//Random Game Suggested Tile / Rand Number Generator
function nextSequence() {
    var randomNum = Math.floor(Math.random()*4);

    // selects a random colour from the array.
    var chosenColour = colours[randomNum];

    //push this selection to the gamepattern array
    gamePattern.push(chosenColour);

    //audio
    playSound(chosenColour);

    //animate
    $("#" + chosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    //increase the title by each level
    $("#title").text("Level " + level);
    level++;
    }

    //reset users array
    emptyArray = [];

//Compare Game Pattern vs Empty Array
function Compare() {
    if(gamePattern == emptyArray){
        setTimeout(function() {
            nextSequence();
        }, 700);
    }

    else{
        $("#title").text("YOU LOSE");
        playSound(wrong);
        gamePattern = [];
        emptyArray =[];
        start = false;


    }

}


