// canvas context
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// globals
var can_click = false;
var allBalls = [];
var explosions = [];
var level = 1;
var score = 0;

function buildBalls(number) {
    allBalls = [];
    for (var i = 0; i < number; i++) {
        var ball = {
            x:Math.random() * c.width,
            y:Math.random() * c.height,
            color:"black",
            size:10,
            x_speed:Math.random() * 3 + 1,
            y_speed:Math.random() * 3 + 1
        };
        allBalls.push(ball);
    }
}

function drawObject(obj) {
    ctx.beginPath();
    ctx.arc(obj.x,obj.y,obj.size,0,2*Math.PI);
    ctx.fillStyle = obj.color;
    ctx.fill();
    ctx.closePath();
}

function drawBalls() {
    for (var i = 0; i < allBalls.length; i++) {
        var ball = allBalls[i];
        updateBall(ball);
        if (checkCollisions(ball)) {
            score++;
            makeExplosion(ball.x, ball.y);
            allBalls.splice(i,1);
        } 
        else {
            drawObject(ball);
        }
    }
}


function updateBall(ball) {
    if (ball.x + ball.size / 2 > c.width || ball.x - ball.size / 2 < 0) {
        ball.x_speed = ball.x_speed * -1
    }
    if (ball.y + ball.size / 2 > c.height || ball.y - ball.size / 2 < 0) {
        ball.y_speed = ball.y_speed * -1
    }
    ball.x = ball.x + ball.x_speed
    ball.y = ball.y + ball.y_speed
}

function gameLoop() {

    ctx.clearRect(0,0,c.width, c.height);
    drawBalls();
    drawExplosions();
    drawText();

    if (!can_click) { // only start checking gameover condition after the player has clicked
        if (explosions.length < 1) {
            if (score >= level) {
                level++;
            }
            can_click = true;
            score = 0;
            buildBalls(level + 3);
        }
    }

    if (explosions.length < 1 && can_click == false) {
        buildBalls(0); // game over
    }
}

setInterval(gameLoop, 10);

function makeExplosion(x,y) {
    exp = {
        x: x,
        y: y,
        color: "red",
        size: 10,
        size_change: 0.2,
        duration: 300
    }
    explosions.push(exp)
}

c.onclick = function(event) {
    if (can_click) {
        can_click = false;
        var x = event.pageX - c.offsetLeft;
        var y = event.pageY - c.offsetTop;
        makeExplosion(x, y);
    }
}

function drawExplosions() {
    for (var i = 0; i < explosions.length; i++) {
        var exp = explosions[i];
        exp.duration = exp.duration - 1;
        exp.size = exp.size +
        exp.size_change;
        if (exp.duration < 0) {
            explosions.splice(i,1);
        }
        else {
            drawObject(exp);
        }
    }
}

function checkCollisions(ball) {
    for (var i = 0; i < explosions.length; i++) {

        var exp = explosions[i];
        var dx = ball.x - exp.x - 5;
        var dy = ball.y - exp.y - 5;
        var distance = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));

        if (distance < exp.size) {
            return true;
        }
    }
    return false;
}

//challenge
function drawText() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Level: " + level,10,30);
    ctx.fillText("Score: " + score,10,50);
}
