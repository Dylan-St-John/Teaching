var money;
var highestAmount;
var lowValue, highValue, guessValue;
var startingCash = 10;
var maxValue = 9;

// Text variable definitions look like this:
var gameName = "*** Guess ***";
var mystring = " ";


var instructions = [
// NOTE: <br> means "line break", which moves
// down to the next line.
" Guess game <br>",
" <br>",
"You are trying to predict if a random number<br>",
"will fall between two other given numbers. <br>",
" <br>",
"Each turn, I will generate a low and a high number.<br>",
"Then I will ask you to bet on whether the next random number will fall between the given numbers.<br>",
" <br>",
"Bet $0 if you don't agree, but if you agree bet any amount you want as long as you have enough in your wallet. <br>",
" <br>",
"If you guess correctly, you will win the double amount of money you bet. Otherwise, you will lose $3.<br>",
"<br>",
"Hit [ENTER] to start"
];

var clearPage = function() {
    document.getElementById("gamebox").innerHTML = " yyyy";
};

var waitForGameStartKeyPress = function() {
    var keyListener = function(event) {
        if (event.key === "Enter") {
            startGame(); // <-- defined below
            document.removeEventListener("keydown", keyListener);
        }
    };
    document.addEventListener("keydown", keyListener);
};

var startGame = function() {
    startNewTurn();
};

var startNewTurn = function() {
    clearPage();
    generateNumbers();
    showTurnInfo();
};

var showTurnInfo = function() {
    mystring = "";
    mystring += "The High and Low numbers are:<br>Low: " + lowValue + "<br> High: " + highValue +
    "<br> The bet is: the random number will be between the high and low numbers.<br><br> How much will you bet? You ONLY have $" + money + ".";
    document.getElementById("gamebox").innerHTML = mystring;
    waitForUserBet();
};

var waitForUserBet = function() {
    var keyListener = function(event) {
        var value = parseInt(event.key);
        if (value >= 0 && value <= maxValue) {
            resolveBet(value);
            document.removeEventListener("keydown", keyListener);
        }
    }
    document.addEventListener("keydown", keyListener);
};


var waitForUserRetry = function() {
    var keyListener = function(event) {
        if (event.key == "Enter") {
            clearPage();
            showTurnInfo();
            document.removeEventListener("keydown", keyListener);
        }
    };
    document.addEventListener("keydown", keyListener);
};

var waitForGameRestart = function() {
    var keyListener = function(event) {
        if (event.key == "Shift") {
            money = startingCash;
            highestAmount = startingCash;
            clearPage();
            showInstructions();
            waitForGameStartKeyPress();
            document.removeEventListener("keydown", keyListener);
        }
    };
    document.addEventListener("keydown", keyListener);
};

var resolveBet = function(amount) {
    if (amount > money) {
        mystring += "<br>You don't have that much!<br>Hit [Enter] to try again.<br><br>";
        document.getElementById("gamebox").innerHTML = mystring;
        waitForUserRetry();
    }
    else {
        var thirdValue = Math.floor(Math.random() * (maxValue + 1));
        mystring +="<br><br>The new value is " + thirdValue + ".<br>";
        if (thirdValue >= lowValue && thirdValue <= highValue) {
            if (amount > 0) {
                var amountWon = amount * 2;
                amountWon = Math.floor(amountWon);
                mystring += "You guessed correctly!<br>You won $" + amountWon + "<br>";
                money += amountWon;
                if(money > highestAmount) highestAmount = money;
            }
            else {
                mystring += "You guessed wrong.<br>You lose $3.<br>";
                money = money - 3;
            }
        }
        else {
            // The new number is not between the first two.
            if (amount > 0) {
                mystring += "You guessed wrong.<br>You lose $" + amount + ".<br>";
                money = money - amount;
            }
            else {
                mystring += "You guessed correctly!<br>";
            }
        }
        if (money <= 0) {
            mystring += "<br> You are out of money.Game over. <br>";
            mystring += "<br> Highest Amount was: " +
            highestAmount + "<br>";
            mystring += "<br>To play again, click on [Restart Game] on the navigation bar<br>";
            $.ajax({ url: "/api/"+ highestAmount + "/"}).done(function(res) {
                console.log(res.highestAmount);
            });

            document.getElementById("gamebox").innerHTML =
            mystring;
        }
        else {
            mystring += "You have $" + money +
            ".<br><br>Hit [Enter] to continue.<br>";
            document.getElementById("gamebox").innerHTML =
            mystring;
            waitForGameStartKeyPress();
        }
    }
};

var generateNumbers = function() {
    lowValue = Math.floor(Math.random() * (maxValue + 1));
    highValue = Math.floor(Math.random() * (maxValue + 1));
    if (lowValue > highValue) {
        var temp = lowValue;
        lowValue = highValue;
        highValue = temp;
    }
}

var showInstructions = function() {
    var iLine = 0;
    mystring = "";
    while (iLine < instructions.length) {
        mystring += instructions[iLine];
        document.getElementById("gamebox").innerHTML = mystring;
        iLine = iLine + 1;
    }
};