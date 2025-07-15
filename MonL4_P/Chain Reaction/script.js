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

// console.log(window.innerWidth);
buildBalls(100);
console.log(ball_array.length);

// 4) Create a function called 'drawObject' that takes in an
// object as a parameter and draws that object to the canvas
// HINT: Canvas Api, Functions, Parameters

function drawBall(ball){
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

drawBall(ball_array[0])

// TO TEST: Give drawObject one of the balls from the ball_array.

// 4b) Draw all the balls from the ball_array using drawObject
// for the length of the array ball_array
// call drawBall with an item from that array
// HINT: Array.forEach