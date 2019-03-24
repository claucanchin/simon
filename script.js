console.log("hello simon");

//find location of the buttons and put into an array to manipulate later
var buttonsClass = document.querySelectorAll(".buttons")[0];
var buttonsArr = [];
var levelCount = 1;
var simonArray = [];

for (var i = 0; i < buttonsClass.children.length; i++) {
    buttonsArr.push(buttonsClass.children[i]);
}


var flash = function(button) {
    return function() {
        var oldColor = button.style.backgroundColor;
        button.style.backgroundColor = "black";
        setTimeout(function(){
            button.style.backgroundColor = oldColor;
        }, 200)
    }
}

var flashButtons = function(arrOfButtons) {
    var pauseTime = 100;
    for (var i = 0; i < arrOfButtons.length; i++) {
        setTimeout(flash(arrOfButtons[i]), pauseTime);
        pauseTime = pauseTime + 500;
    };
}

//start game generate random buttons, push into array, flash
var startButton = document.querySelector("#start");
startButton.addEventListener("click", start);

function start() {
    for (var i = 0; i < levelCount; i++) {
        simonArray.push(randomSelect(buttonsArr));
    }
    flashButtons(simonArray);
}

var randomSelect = function(buttons)  {
    return buttons[Math.floor(Math.random()*buttonsArr.length)];
}