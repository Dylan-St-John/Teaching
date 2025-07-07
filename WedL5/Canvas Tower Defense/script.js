// 1) Create a canvas object
// 2) create a function to draw the track and the background on the canvas
// 3) create a function called updateGame that calls the function above
// --> run this on an interval

// Get canvas and context
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var enemies = [];
var time = 0;
var spawntime = 20; 
var turns = [[220,120],[220,420],[390,420],[390,120],[canvas.width+5,120]];
// var e = new Enemy()
var towers = [];

setInterval(updateGame,30);

function drawTrack(){
    // Create background
    ctx.fillStyle ="green";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    // Create track
    ctx.fillStyle ="brown";
    ctx.fillRect(0,100,200,40);
    ctx.fillRect(200,100,40,340);
    ctx.fillRect(200,400,175,40);
    ctx.fillRect(375,100,40,340);
    ctx.fillRect(375,100,250,40);

    // for every tower in the towers array
    for (let i = 0; i < towers.length; i++){
        // draw that tower
        towers[i].draw();
    }
}

function updateGame(){
    drawTrack();
    // e.updatePosition();
    // check if its time to add a new enemy
    checkAdd();
    // draw enemies
    drawEnemies();
}

function getDistance(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(y1 - y2, 2) + Math.pow(x1 - x2, 2));
}

function getVector(speed, startX, startY, endX, endY){
    var distance = getDistance(startX, startY, endX, endY);
    var xDiff = endX - startX;
    var yDiff = endY - startY;
    var vector = [speed * (xDiff / distance), speed*(yDiff / distance)];
    return vector;
}

// console.log(getDistance(220, 220, 120, 420))
//4) Create an enemy object! The enemy object should include:
// HINT: Object Constructors (w3Schools Javascript)
function Enemy(){
// a) x and y coordinates
    this.x = -20
    this.y = 120;
    this.dx = 3;
    this.dy = 0;
    this.turn = 0;
// b) a draw function
    this.draw = function(){
        // drawing our enemy 
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.x, this.y, 10, 0, 2*Math.PI);
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();

    };
// c) a function to update the enemies location based on
// the speed they're going at (create two variables dx and dy to track
// how much the enemies location changes each frame)
    this.updatePosition = function(){
        this.draw();
        // if our x coordinate is off the canvas
        if(this.x > canvas.width + 5){
            // return True (we'll use this later)
            return true;
        }
        if (this.checkTurn()){
            return true;
        }
        // change the x coordinate by dx
        this.x += this.dx;
        // change the y coordiante by dy
        this.y += this.dy;
    };

    this.checkTurn = function(){
        // --> get the distance to the next turn using the getDistance function
        var distance = getDistance(this.x, this.y, turns[this.turn][0], turns[this.turn][1]);
        // --> if you are within 5 units of the turn
        if (distance <= 5){
            // go to the next entry in the turn array (its time to turn)
            this.turn += 1
            // if you are at the end of the turn array, return true
             if (this.turn == turns.length){
                return true
             }
            // finally, change the speed
            this.changeSpeed();
        }
    };

    this.changeSpeed = function(){
        var speed = getVector(3, this.x, this.y, turns[this.turn][0], turns[this.turn][1])
        // --> get the current vector and change dx and dy
        this.dx = speed[0];
        this.dy = speed[1];
    };
}

//5 Create a tower object constructor. The object constructor should have:
function Tower(x, y){
    // a) two parameters for the x and y coordinates (the location where the
    // user clicked)
    this.x = x;
    this.y = y;

    // b) Create a draw method
    this.draw = function(){
        // draw your tower here
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 20, 20);
    }
    
    // c) Create an update that only calls the draw method (we'll expand
    // this later)
    // TO TEST: Create an example tower at any given x and y and draw it
    // to the screen
    this.update = function(){
        this.draw();
    }
}
// d) When the screen clicked, draw a tower
// --> Create a 'towers' array. When you click the screen, add the new 
// tower to the towers array 
// then, inside of drawTrack, for every tower in the towers array, 
// call its update method 
canvas.onclick = function addTower(event){
    //towers.push(new Tower)
    console.log("x: " + event.pageX);
    console.log("y: " + event.pageY);
    towers.push(new Tower(event.pageX - this.offsetLeft, event.pageY- this.offsetTop ));
    console.log(towers)
}

function projectile(startX, startY, dx, dy){
    this.x = startX;
    this.y = startY;
    this.dx = dx;
    this.dy = dy;
    // 1) Create a draw method and test it
    this.draw = function(){
        // what should the projectile look like? --> make it
    }
    this.update = function(){
        this.draw()

        // future update in location change
        this.x += this.dx
        this.y += this.dy
    }
    // 2) How can we detect if the projectile has left the screen?
    // create a method that removes the projectile 
    // if it leaves the screen
}

function drawEnemies(){
    // for every enemy in the enemies array
    for (var i=enemies.length -1; i>=0; i--){
        // if updatePosition for that enemy returns True
        if(enemies[i].updatePosition()){
            // remove that enemy from the array
            enemies.splice(i, 1)
        }
    }
}

function checkAdd(){
    // increase time by itself plus one
    time += 1;
    // if we divide time by spawntime and the remainder is 0 (spawntime seconds has gone by)
    if (time%spawntime == 0){
        // add a new enemy to the enemies array
        enemies.push(new Enemy());
    }
}
