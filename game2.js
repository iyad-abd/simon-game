var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []

 $(".btn").on("click", function () {
        var userChosenColour = $( this).attr("id")
        userClickedPattern.push(userChosenColour)
        console.log(userClickedPattern)
     playSound(userChosenColour)
     animatePress(userChosenColour)
        checkAnswer(userClickedPattern.length - 1);
     
 })
   var level = 0
function nextSequence() {
     userClickedPattern = [];
    level++
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColors[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).delay(100).fadeOut().fadeIn('slow')
     playSound(randomChosenColour)
   
    animatePress(randomChosenColour)
}
function playSound(name) {
var audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
    
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function () {
         $("#" + currentColour).removeClass("pressed");
    },100)
}
var gameStarted = false

$(document).on("keydown", function () {
    if (!gameStarted) {
        nextSequence()
       
        $("H1").text("level " + level)
        gameStarted = true
    }
})

function checkAnswer(currentlevel) {
    if (gamePattern[currentlevel] === userClickedPattern[currentlevel]) {
        console.log("succes")
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence()
            },1000)
        } 
    
    }else {
        playSound("wrong")
        
        $("h1").text("Game Over, Press Any Key to Restart");

        gameOver()
        }
}

function gameOver() {
    gamePattern = []

    level = 0

    gameStarted = false

    
    
}