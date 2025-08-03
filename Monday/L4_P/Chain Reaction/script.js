// console.log('Hello World!');
ball_array = [];
canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext("2d");

// 2) Draw a circle to the canvas
// CHALLENGE: Fill in the circle

// 3) Create a function called 'create_balls' that:
// --> a) takes in one parameter for the amount of balls we would 
// --> like to create
function buildBalls(number) {
    // --> b) for every ball we want to create,
    for (var i = 0; i < number; i++) {
        // --> create an object ball with the following properties:
        // --> x coordinate, y coordinate, a colour, a size, 
        // --> an x_speed and a y_speed
        var ball = {
            x:Math.random() * canvas.width,
            y:Math.random() * canvas.height,
            color:"black",
            size:10,
            x_speed:Math.random() * 3 + 1,
            y_speed:Math.random() * 3 + 1
        };
        // --> c) add the ball you create an an empty array
        ball_array.push(ball);
    }
}

// TO TEST: Call the function and print out the array with
// all the balls inside
buildBalls(5);

// 4) Create a function called 'drawObject' that takes in an
// object as a parameter and draws that object to the canvas
// HINT: Canvas Api, Functions, Parameters
function drawObject(object){
    ctx.beginPath();
    ctx.arc(object.x, object.y, object.size, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
}

// 4b) Draw all the balls from the ball_array using drawObject
// for the length of the array ball_array
// call drawBall with an item from that array
// HINT: Array.forEach


function updateBalls(ball){
    // if the balls x coordinate + (its size divided by 2) is greater than 
    // the width of the canvas 
    // OR the balls x coordinate - (its size divided by 2) is less than 0
        // inverse the balls x speed
    
    // if the balls y coordinate + (its size divided by 2) is 
    // greater than the height of the canvas 
    // OR if the balls y coordinate - (its size divided by 2) 
    // is less than 0
        // inverse the balls y speed

    // add the balls x speed to its x coordinate
    ball.x = ball.x_speed + ball.x
    // add the balls y speed to its y coordinate
    ball.y = ball.y_speed + ball.y
}

function gameLoop(){
    // clear the canvas
    // draw balls
    ball_array.forEach(drawObject);
    // update balls
    ball_array.forEach(updateBalls);
    console.log("test")
}

let interval = setInterval(gameLoop, 1000)