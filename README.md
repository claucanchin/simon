# simon

Simon is named after the simple children's game of Simon Says. A round in the game consists of the buttons lighting up in a random order, after which the player must reproduce that order by clicking the buttons in the same sequence. As the game progresses, the number of buttons to be clicked increases. If the user succeeds, the series become progressively longer and more complex. 

#### Build Simon (User Story)
As a user, 
- I can see four buttons (clockwise: green, red, blue, yellow)
- I can click on a start button that does a count down before the button lights up
- I can see the order of buttons that light up (with audio) that I have to reproduce
- I have to reproduce the colors within a certain time limit
- I can see the level displayed and updated after every round
- If I fail, I have to repeat the sequence again

### Ideas for Further
- Add shorter time intervals (i.e. the lights flash faster)
- Add another color
- Rotate the placement of the buttons
- Use keyboard as input instead of clicking

### Pseudo-code 
This program will allow the user to click on 4 buttons. 
Each click will be record down to an array and compare with the game result to check if user win or not after a number of clicks

if user click on red button
   add "red" to clickArray
   change red button to gray for 1 seconds to let user know that they clicked the button
   reset previous clicked button to normal state
   update previous clicked button to red

if user click on green button
   add "green" to clickArray
   change green button to gray for 1 seconds to let user know that they clicked the button
   reset previous clicked button to normal state
   update previous clicked button to green

First round:
levelCount is 1
Simon will look at all buttons (buttonsArray)
Simon will random select x number of colors - levelCount
Save (push) random colors into simonArray

	repeatable: Simon will flash the buttons in simonArray
		run detectWinState

Win state:
If the user's clickArray matches simonArray
	add levelCount
	add one random color to simonArray
	clear clickArray
	show some message
	repeat flash buttons (next round)
Else 
	clear clickArray
	show some message
	repeat simonArray

Reset: clear simonArray and clickArray