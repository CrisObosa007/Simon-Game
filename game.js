
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false ; 




$(document).keypress(function(){
    if(!started){
    $("h1").text("Level" + level);
    nextSequence();
    started = true;
    }
});


$(".btn").click(function(){
    var userChoosenColour = this.id;
    $("#" + userChoosenColour).fadeOut(100).fadeIn(100);

    userClickedPattern.push(userChoosenColour);

    checkAnswer(userClickedPattern.length - 1);

});


function startOver(){
     gamePattern = [];
     userClickedPattern = [];
     level = 0;
    started = false ; 

}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        $("h1").text("Success");

        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }


    }else{

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}



function nextSequence(){
    userClickedPattern = [];
    
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
}






