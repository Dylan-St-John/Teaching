// these lines can be found on the canvas api page, this gives
// us access to the canvas from javascript
const canv = document.getElementById("mazeCanvas");
const ctx = canv.getContext("2d");

var grid = [];
var paths = [];
var ptsStack = [];

mazeInterval = setInterval(createMaze, 10);

// 1) Create an object called "Point" with a draw method.
// --> you can create this either as a class or obj constructor
function Point(x,y){
    // --> The point should require an x and y coordinate to create
    // (parameters).
    this.x = x;
    this.y = y;
    this.visited = false;
    this.paths = [];
    this.neighbours = [];
    this.draw = function(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.x,this.y,4,4);
    };
    //4) Create a method inside of your Point class called 
    // 'getUnvisited'. 
    this.getUnvisited = function(){
        // a) For every neighbour in the neighbours list, if that
        // neighbour has been visited, remove it
        for (let i = this.neighbours.length - 1; i >= 0; i--){
            if (this.neighbours[i].visited == true){
                this.neighbours.splice(i,1);
            }
        }

        // b) If there are more than 0 neighbours left, return a random
        // selection of the remaining neighbours. Otherwise, return false
        if(this.neighbours.length > 0){
            var idx = Math.floor(this.neighbours.length*Math.random());
            return this.neighbours[idx];
        }
        else{
            return false;
        }

    }
}

// a) Make an instance of the point object and call its draw method
// to visualise the point.
// var dylan = new Point(200, 200);
// dylan.draw();
// console.log(dylan.forFun)

// var lauren = new Point(300, 300);
// lauren.draw();
// console.log(lauren.forFun)

// 2) Create a function called 'init' that creates rows and columns
// of these points. Store all of the points you create in an array
// called 'points'. For each row you create, fill a new empty array
// called 'row' and push that array into the points array.

function init(){
    // first objective: make 1 row of points
    for (j=0; j<60; j++){
        row = [];
        for (i=0; i<60; i++){
            pt = new Point(5 + (i*10) , 5 + (j*10));
            // pt.draw();
            row.push(pt);
            if (j > 0){
                grid[j-1][i].neighbours.push(row[i]);
                row[i].neighbours.push(grid[j-1][i]);
            }
            if (i > 0){
                row[i-1].neighbours.push(row[i]);
                row[i].neighbours.push(row[i-1]);
            }
        }
        grid.push(row);
    }
    // add a random point to the ptsStack
    var i = Math.floor(Math.random()*60);
    var j = Math.floor(Math.random()*60);
    ptsStack.push(grid[i][j]);
    ptsStack[0].visited = true;

}
init();

// 2 CHALLENGE: Create a property inside of your point class
// called 'neighhbours', which is an empty list. Inside of init,
// everytime you create a point, populate its neighbours with
// the points to the left, right, above and below it.

// 3) Create another class / object constructor called 'Path' 
// that takes in two points and a colour. When created, if you
// call its draw method, draw a rectangle connecting the two points.
// This should work both vertically and horizontally.

function Path(p1, p2, colour){
    this.p1 = p1;
    this.p2 = p2;
    this.vertical = p1.x == p2.x;
    this.colour = colour;
    this.draw = function(){
        ctx.strokeStyle = this.colour;
        ctx.lineWidth = 4;
        ctx.beginPath();
        if(this.vertical){
            // this code makes the corners look nice :)
            ctx.moveTo(p1.x,Math.min(p1.y,p2.y)-2);
            ctx.lineTo(p2.x,Math.max(p1.y,p2.y)+2);
        }
        else{
            ctx.moveTo(p1.x,p1.y);
            ctx.lineTo(p2.x,p2.y);
        }
        ctx.stroke();
        ctx.closePath();
    }
}



// console.log(testPath);

// 3 CHALLENGE: Create a function called 'Draw Maze' that draws 
// every single path that you've created 
// (create an array called paths where you store paths when created)

function drawMaze(){
    // 1) clear the canvas
    ctx.clearRect(0,0,canv.width, canv.height);
    // 2) for every path in the path array, draw it
    // for every path in my path array
    for(let i = 0; i < paths.length; i++){
        // call its draw method
        paths[i].draw();
    }
}


// 5) IMPLEMENTING THE DEPTH FIRST SEARCH ALGORITHM:
// a) We will use a stack system to store points that we've visited
// --> create an array called 'ptStack'
// --> create an attribute (array) inside of point called 'paths' that will
// store a point that it has a path to
// --> create an attribute inside of point called 'visited' thats true 
// or false
// b) create a function called 'createMaze'


function createMaze(){
    // --> 1) Draw our maze
    drawMaze();
    // --> 2) Draw the top point of the stack
    // ptsStack[0].draw();
    // --> 3) Create a variable that stores the result of getUnvisited
    // from the point we just drew (top point of the stack)
    nextLocation = ptsStack[0].getUnvisited();
    // 4) While this variable is false (there are no unvisited neighbours)
    while (nextLocation == false){
        // --> pop off a point from the stack
        ptsStack.splice(0,1);

        // --> if we empty the array, then we've reached the bottom and
        // can exit the program.
        if (ptsStack.length == 0){
            clearInterval(mazeInterval);
            return;
        }
        // --> reassign the new variable to the the result of getUnvisited
        // from the point we just drew (top point of the stack
        nextLocation = ptsStack[0].getUnvisited();

    }
    // if this variable returns a point instead, 
    // add that point to the stack and draw a path to it.
    nextLocation.visited = true;
    paths.push(new Path(ptsStack[0], nextLocation, "white"));
    nextLocation.paths.push(ptsStack[0]);
    ptsStack[0].paths.push(nextLocation);
    ptsStack.splice(0,0,nextLocation);

}