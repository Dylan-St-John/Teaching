// This file executes the commands that create the game.
// Commands are executed in order, from top-to-bottom.

showInstructions();

// Give the player some money.
money = startingCash;
highestAmount = money;

// Tell the document to start listening for
// keyDown events:
waitForGameStartKeyPress();

// The rest of the game will execute in response to user input. 
// As the user presses keys, the various keyListener functions 
// in the 'definitions' script will consume the events 
// and execute the game code in response.
