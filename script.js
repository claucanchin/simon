console.log("hello simon");

//find location of the buttons and put into an array to manipulate later
var buttonsClass = document.querySelectorAll(".buttons")[0];
var buttonsArr = [];
var simonArray = [];
var playerArray =[];
var clickCount = 0;

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
    this.style.display = 'none';
    newRound();
}

function newRound() {
    simonArray.push(randomSelect(buttonsArr));
    flashButtons(simonArray);
}

var randomSelect = function(buttons)  {
    return buttons[Math.floor(Math.random()*buttonsArr.length)];
}

for (var i = 0; i < buttonsArr.length; i++) {
    buttonsArr[i].addEventListener("click",
        //put clicked buttons into an array
        function(button) {
          return function() {
                playerArray.push(button);
                clickCount += 1;
                checkWin();
            }
        }(buttonsArr[i]));
}

//compare both arrays: return false as soon as length does not match, then return false as soon as index does not match
var isSame = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

//when player clicks, compare number of clicks with simon array, if matches then check isSame
var checkWin = function() {
    if (clickCount === simonArray.length) {
        if (isSame(playerArray, simonArray)) {
            console.log("It's a match");
            playerArray = [];
            clickCount = 0;
            newRound();
        } else {
            console.log("You lose, try again");
            playerArray = [];
            clickCount = 0;
            flashButtons(simonArray);
        }
    }
}