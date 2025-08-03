// 1) Create a canvas object
// 2) create a function to draw the track and the background on the canvas
// 3) create a function called updateGame that calls the function above
// --> run this on an interval

// Get canvas and context
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
setInterval(updateGame,30);

var time = 0;
var spawnTime = 20;
var enemies = [];
var towers = [];
// var turns = [[x, y], [x2,  y2], [x3, y3], [lastx, lasty]]
var turns = [[220, 120], [220, 420], [390, 420], [390, 120], [canvas.width+5, 120]]

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

    // example.update();
    // 6. FOR EVERY TOWER IN THE TOWER LIST, CALL ITS DRAW METHOD
    for (let i = 0; i < towers.length; i++){
        towers[i].update();
    }
}

// var example = new tower(500, 400);
// testEnemy = new enemy()

function updateGame(){
    drawTrack();
    checkAdd();
    drawEnemies();
    // testEnemy.updatePosition();
    console.log(towers);

}
// var turns = [[x, y], [x2,  y2], [x3, y3], [lastx, lasty]]
function getDistance(x1, y1, x2, y2){
    // return to the user the value calculated using pythagorus theorem
    // a == y1 - y2
    // b == x1 - x2
    // return the value of c
    return (Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2)))
}

// this function returns a [dx, dy] value when given two points and a speed
function getSpeedVector(speed, x1, y1, x2, y2){
    // get the distance between x1, y1 and x2, y2 using the getDistance
    // function
    var distance = getDistance(x1, y1, x2, y2);
    var xDif = x2 - x1;
    var yDif = y2 - y1;
    var speedVector = [speed*(xDif/distance), speed*(yDif/distance)];
    return(speedVector);
}

//4) Create an enemy object! The enemy object should include:
function enemy(){
    // a) x and y coordinates
    this.x = 20;
    this.y = 120
    // keep track of their future change of x and y 
    this.dx = 2;
    this.dy = 0;
    this.nextTurn = 0;
    // c) a function to update the enemies location based on
    // the speed they're going at (create two variables dx and dy to track
    // how much the enemies location changes each frame)    
    this.updatePosition = function(){
        // draw the enemy
        this.draw();
        // if the enemies x position is at the end of the stage
        if (this.x > canvas.width + 5){
            return true;
        }
        this.checkTurn();
        // update this.x by a change in this.dx
        this.x += this.dx;
        // update this.y by a change in this.dy
        this.y += this.dy;
    }   

// b) a draw function
    this.draw = function(){
        // put drawing for enemy in here - CIRCLES!
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.closePath();
    }

    // c) a checkTurn method
    this.checkTurn = function(){
        var distance = getDistance(this.x, this.y, turns[this.nextTurn][0], turns[this.nextTurn][1])
        // if distance is less than 5
        // console.log(distance);
        if (distance <= 5){
            // increase this.nextTurn by itself plus 1
            this.nextTurn++;
            // if this.nextTurn is equal to the length of the turns array
            if (this.nextTurn == turns.length){
                // return true so that we delete this enemy from the enemies
                // array
                return true
            }
            this.changeSpeed();
        }       
    }

    // d) a changeSpeed method
    this.changeSpeed = function(){
        var newSpeed = getSpeedVector(3, this.x, this.y, turns[this.nextTurn][0], turns[this.nextTurn][1])
        this.dx = newSpeed[0];
        this.dy = newSpeed[1];
    }
}

function tower(x, y){
    // 1) self-attributes for: x and y coordinates
    this.x = x;
    this.y = y;
    // 2) draw method for drawing the square
    this.draw = function(){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 20, 20);
    }
    // 3) update method which calls the draw
    this.update = function(){
        this.draw();
    }
    this.shoot= function(){
        // make a projectile when an enemy is close it and send it towards it
    }
}
// 4) When the canvas is clicked, create a tower at that location. Add this new tower into the towers
// array
// HINT: pageX, pageY, offsetLeft, offsetTop (offsets because youll need to subtract the offset of the canvas element to find where youve actually clicked)

canvas.onclick = function makeTower(e){
    towers.push(new tower(e.pageX - this.offsetLeft, e.pageY - this.offsetTop));
}

function projectile(startX, startY, dx, dy){
    // 1. Have this values for its current x and y positions, its dx and dy, a draw function and an update function (which just draws it for now)
}

// create a function called drawEnemies that will draw every enemy in the enemy array to the screen
function drawEnemies(){
    // for every enemy in the enemies array
    for (var i=enemies.length-1; i>=0; i--){
        // if you call the updatePosition function of that enemy and it returns true (calling updatePosition
        // will move it for you)
        if(enemies[i].updatePosition()){
            // remove that enemy from the array (since it is no longer on the screen)
            enemies.splice(i, 1)
        }
    }
}

// create a function called checkAdd that will add new enemies to the enemy array
function checkAdd(){
    time += 1;
    // if a certain time interval has passed (if the remainder of time divided by spawnTime is 0) 
    if (time % spawnTime == 0){
        // add a new enemy to the enemies array
        enemies.push(new enemy());
    }
    // console.log(enemies);
}