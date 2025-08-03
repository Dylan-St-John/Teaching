// 1) making global variables (what level we are on, the score, etc)
let level = 0;
let score = 0;
const ballArray = [];

// 2) Grab the canvas from the page so we can start drawing to it
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

// 3) Create a function called "buildBalls" thats take in a parameter
// called 'number' for the amount of balls you wish to create.
function buildBalls(number){
    // for all of the balls we wanna make
    for (let i = 0; i < number; i++){
        // create an object called 'ball' with the following properties:
        const ball = {
            // a random x and y coordinate
            x: Math.floor(Math.random() * myCanvas.width) + 1,
            y: Math.floor(Math.random() * myCanvas.height) + 1,
            // a colour
            color: "black",
            // a size
            size: 10,
            // and a random x and y speed (these should just be numbers)
            x_speed: Math.floor(Math.random() * 3) + 1,
            y_speed: Math.floor(Math.random() * 3) + 1
        };
        // once youve created a ball, add it to an array
        ballArray.push(ball);
    }
}

// TO TEST: Call buildBalls and console.log the value of the ballArray
// to see if it is filled with balls
buildBalls(5);
console.log(ballArray[0]);

//4) Create another function called 'drawObject' that will take in
// an object as a parameter and draw it to the screen.
// HINT: Canvas API

function drawObject(ball){
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill()
}

// TO TEST: Call buildBalls and then try calling drawObject with one
// of the balls from buildBalls

// for every ball in the ball Array
//     call drawObject with ball



// 5) 

// a) Create a function called "updateBall" that takes in a ball
// as a parameter. It will then update that balls position for the next
// frame (next picture in the flipbook) --> Use its x_speed and y_speed
// properties.

// b) Create a function called "gameLoop" that clears the canvas
// and then draws all of the balls with the updated positions. Make sure
// this function runs in an interval

function drawBalls(){
    for (let i=0; i < ballArray.length; i++){
        let ball = ballArray[i]
        updateBall(ball);
        drawObject(ball);
    }
}


function updateBall(ball){
    // if the balls x coordinate is on the left border (0) or the right
    // border (500):
        // change the balls x speed so its equal to itself *= -1
}


function gameLoop(){
    // c) clear the canvas
    drawBalls();
}

// HINT: Canvas API, Set Interval
setInterval(gameLoop, 100)


