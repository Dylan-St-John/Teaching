// Get canvas and context
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var ranges = document.getElementById("ranges");

var turns = [[220,120],[220,420],[390,420],[390,120],[canvas.width+10,120]];
var colors = ["#ff0000",'#00ffff',"#00ff00","#ffa31a","#ffb3ff"];

var enemies = [];
var towers = [];
var shots = [];

var health = 200;
var score = 0;
var level = 1;
var showRange = true;
var time = 0;
var timeout = 200;
var spawntime = 20;
var count = 0;

var roundMobs = Math.pow(2,level);
setInterval(updateGame,30);


function getDistance(x1,y1,x2,y2){
    var distance = Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
    return distance;
}

// Creates a speed vector based on a difference in x and y positions
function getXYSpeed(speed,startX,startY,endX,endY){
    // get distance between the two points
    var distance = getDistance(startX,startY,endX,endY);
    var xDif = endX-startX;
    var yDif = endY-startY;
    // create unit vector and multiply both components by speed of shot
    var sv = [speed*(xDif/distance),speed*(yDif/distance)];
    return sv;
}

//constructor for enemy
function enemy(hits){
    this.x = -20;
    this.y = 120;
    this.dx = 2+hits;
    this.dy = 0;
    this.hits = hits;
    this.progress = 0;
    this.nextTurn = 0;
    this.updatePosition = function(){
        this.progress += Math.abs(this.dx)+Math.abs(this.dy);
        this.draw();
        if(this.checkTurn()){
            health -= this.hits+1;
            return true;
        }
        this.x += this.dx;
        this.y += this.dy;
    };
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = colors[this.hits];
        ctx.arc(this.x,this.y,10,0,2*Math.PI);
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
    };
    
    this.checkTurn = function(){
        var distance = getDistance(this.x,this.y,turns[this.nextTurn][0],turns[this.nextTurn][1]);
        if(distance<=5){
            this.nextTurn++;
            if (this.nextTurn == turns.length){
                return true;
            }
            this.changeSpeed();
        }
    };
    this.changeSpeed = function(){
        var newSpeed = getXYSpeed(2+this.hits,this.x,this.y,turns[this.nextTurn][0],turns[this.nextTurn][1]);
        this.dx = newSpeed[0];
        this.dy = newSpeed[1];
    }
}
//tower constructor
function tower(x,y){
    this.x = x-10;
    this.y = y-10;
    this.time = 30;
    this.range = 100;
    this.update = function(){
        this.time += 1;
        this.draw();
        if(this.time > 40){
            var targetXY = this.findTargetXY();
            if(targetXY!=-1){
                this.shoot(targetXY[0],targetXY[1]);
                this.time = 0;
            }
        }
    };
    this.draw = function(){
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x,this.y, 20,20);
        if(showRange){
            ctx.beginPath();
            ctx.arc(this.x+10,this.y+10,this.range,0,2*Math.PI);
            ctx.stroke();
        }
    };
    this.findTargetXY = function(){
        var xDif, yDif, distance, lookAhead;
        for(var i = 0;i<enemies.length;i++){
            distance = getDistance(this.x+10,this.y+10,enemies[i].x,enemies[i].y)
            if(distance<=this.range){
                // How many refreshes until the shot makes it to the x,y point
                lookAhead = Math.floor(distance/10);
                // Modify the target x,y by dx and dy multiplied by number of refreshes
                return [enemies[i].x+(enemies[i].dx*lookAhead),enemies[i].y+(enemies[i].dy*lookAhead)]
                
            }
        }
        return -1;
    }
    this.shoot = function(x,y){
        /**
         * Note: 10 is added to this.x and this.y in order  
         * to position the shot at the center of the tower
         * when is fired.
         */
        var speedVector = getXYSpeed(10,this.x+10,this.y+10,x,y);
        shots.push(new shot(this.x+10,this.y+10,speedVector[0],speedVector[1]));
    }
}
//shot constructor
function shot(startX,startY,dx,dy){
    this.x = startX;
    this.y = startY;
    this.dx = dx;
    this.dy = dy;
    this.update = function(){
        this.draw();
        if(this.offScreen() || this.hitEnemy()){
            return true;
        };
        this.x += this.dx;
        this.y += this.dy;
    };
    this.offScreen = function(){
        if(this.x<-10 || this.x > canvas.width+10||this.y<-10||this.y>canvas.height+10){
            return true;
        }
    };
    this.hitEnemy = function(){
        for(var i = enemies.length-1;i>=0;i--){
            var distance = getDistance(this.x,this.y,enemies[i].x,enemies[i].y);
            if(distance<=15){
                enemies[i].hits--;
                score++;
                if(enemies[i].hits <0){
                    enemies.splice(i,1);
                }else{
                    enemies[i].changeSpeed();
                }
                return true;
            }
        }
    };
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.arc(this.x,this.y,5,0,2*Math.PI);
        ctx.fill();
    };
}

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
    // Draw towers
    for(var i=0; i<towers.length;i++){
        // Checks if there are enemies on the track
        if (enemies.length>0){
            towers[i].update();
        }else{
            towers[i].draw();
        }
    }
    // Draw the projectiles
    for(var i=0; i<shots.length;i++){
        if(shots[i].update()){
            shots.splice(i,1);
        }
    }
    // Update the text display
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Level: "+level,10,20);
    ctx.fillText("Lives: "+health,10,40);
    ctx.fillText("Score: "+score,10,60);
}

function swap(array,i1,i2){
    var temp = array[i1];
    array[i1] = array[i2];
    array[i2]=temp;
}

function drawEnemies(){
    for(var i=enemies.length-1;i>=0;i--){
        if(enemies[i].updatePosition()){
            enemies.splice(i,1);
        }else{
            // Check if the enemy has passed another enemy
            if(i<enemies.length-1){
                if(enemies[i].progress< enemies[i+1].progress){
                    swap(enemies,i,i+1);
                }
            }
        }
    }
}

function checkAdd(){
    if(time%spawntime == 0 && roundMobs > count){
        count++;
        var hits = Math.floor(Math.random()*colors.length);
        enemies.push(new enemy(hits));
    }
}

function checkEndOfRound(){
    if(roundMobs == count && enemies.length == 0){
        level++;
        roundMobs = Math.pow(2,level);
        spawntime -= 1;
        timeout = 200;
        time = 0;
        count = 0;
    }
}

function updateGame(){
    drawTrack();
    if(timeout == 0){
        time += 1;
        // Draw the enemies
        drawEnemies();
        // Checks if it is time to add another enemy
        checkAdd();
        // Checks for the end of the round
        checkEndOfRound();
    }else{
        timeout--;
    }
}

canvas.onclick = function addTower(e){
    towers.push(new tower(e.pageX- this.offsetLeft,e.pageY- this.offsetTop));
}

ranges.onclick = function(){
    showRange = !showRange;
    if(showRange){
        ranges.innerHTML = "Hide Ranges";
    }else{
        ranges.innerHTML = "Show Ranges";
    }
}
