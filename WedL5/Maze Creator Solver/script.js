// 1) Create an object called "Point" with a draw method.
// --> The point should require an x and y coordinate to create
// (parameters).
// --> you can create this either as a class or obj constructor
// a) Make an instance of the point object and call its draw method
// to visualise the point.

const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
const columns = 60;
const rows = 60;
var grid = [];
var paths = [];
var ptsStack = [];

var mazeInterval = setInterval(createMaze, 20);

// ctx.beginPath();
// ctx.strokeStyle = 'white';
// ctx.moveTo(20, 20);
// ctx.lineTo(20, 100);
// ctx.lineTo(70, 100);
// ctx.stroke();

function Point(x, y){
    this.x = x;
    this.y = y;
    this.neighbours = [];
    this.visited = false;
    this.paths = [];

    this.draw = function(){
        // use the canvas object to draw to the screen
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, 4, 4);
    };

    //4) Create a method inside of your point class called 
    // 'getUnvisited'. 

    this.getUnvisited = function(){
    // a) For every neighbour in the neighbours list, if that
    // neighbour has been visited, remove it.
    // IMPORTANT: HAVE TO LOOP THROUGH THIS LIST BACKWARDS
        for (let i = this.neighbours.length - 1; i >= 0; i--){
            if (this.neighbours[i].visited){
                this.neighbours.splice(i, 1);
            }
        }

    // b) If there are more than 0 neighbours left, return a random
    //  neighbour. Otherwise, return false
        if (this.neighbours.length > 0){
            let idx = Math.floor(Math.random() * this.neighbours.length)
            return this.neighbours[idx];
        }
        else{
            return false;
        }
    }


}

// 2) Create a function called "initialise" that generates
// a grid of points. My recommendation is to start with one row

function initialise(){
    for (let j = 0; j < rows; j++){
        var row = [];
        for (let i = 0; i < columns; i++){
            row.push(new Point(8 + (i*10), 8 + (j*10)))
            // row[i].draw();
            // CHALLENGE: Create an attribute inside of the point 
            // object called "neighbors" (an empty array). 
            // For each point created in initialise, fill in 
            // that points neighbours.
            if (i > 0){ 
                // exchange neighbours between the current point
                // and the point previous (left and right)
                row[i-1].neighbours.push(row[i]);
                row[i].neighbours.push(row[i-1]);
            } 
            if (j > 0){
                grid[j-1][i].neighbours.push(row[i]);
                row[i].neighbours.push(grid[j-1][i]);
            }
            // when a point is created, fill in its neighbours

        }
        grid.push(row);
    }
    let x = Math.floor(Math.random() * rows);
    let y = Math.floor(Math.random() * columns);
    ptsStack.push(grid[x][y]);
}

initialise();

// 3) Create an object called "Path" that takes in two points and
// a colour. A path is a rectangle that is drawn between two points
//, so it should have a draw method. It should draw up and down,
// or left and right depending on where we are drawing paths to.

class Path {
    constructor(p1, p2, colour){
        this.p1 = p1;
        this.p2 = p2;
        this.colour = colour;
        this.vertical = p1.x == p2.x; // if they are equal, this is true. 
        // otherwise, it will be false
    }
    draw(){
        // if its vertical, im going to draw it differently.
        // HINT: Canvas Reference --> Path
        ctx.beginPath();
        ctx.strokeStyle = this.colour;
        ctx.lineWidth = 4;
        // how can we draw this better?
        if (this.vertical){
            // this code makes the corners look nice :)
            ctx.moveTo(this.p1.x,Math.min(this.p1.y,this.p2.y)-2);
            ctx.lineTo(this.p2.x,Math.max(this.p1.y,this.p2.y)+2);
        }
        else{
            ctx.moveTo(this.p1.x, this.p1.y);
            ctx.lineTo(this.p2.x, this.p2.y);
        }
        ctx.stroke();
        ctx.closePath();
    }
}

// paths.push(new Path(grid[0][1], grid[0][2], "white"));
// paths.push(new Path(grid[0][2], grid[1][2], "white"));
// paths.push(new Path(grid[1][2], grid[1][3], "white"));
// paths.push(new Path(grid[1][3], grid[2][3], "white"));

// CHALLENGE: Create a function called 'Draw Maze' that draws 
// every single path that you've created 
// (create an array called paths where you store paths when created)

function drawMaze(){
    // 1) clear the canvas
    ctx.clearRect(0,0,myCanvas.width, myCanvas.height);
    // 2) for every path in the path array, 
    for (i = 0; i < paths.length; i++){
        paths[i].draw();
    }
}

// 5) IMPLEMENTING THE DEPTH FIRST SEARCH ALGORITHM:
// a) We will use a stack system to store points that we've visited
// --> create an array called 'ptStack'
// --> create a attribute (array) inside of point called 'paths' that will
// store which points is has a path to 
// --> create a attribute inside of point called 'visited' thats true 
// or false
// --> Add a random point from the grid array to the ptsStack in init. 
// This is where we will start. Make this points visited property true.
// --> Run createMaze on an interval

// b) create a function called 'CreateMaze'
function createMaze(){
    // --> 1) Draw our maze
    drawMaze();
    ptsStack[0].draw();
    // --> 2) Create a variable that stores the result of getUnvisited
    // from the point we just drew (top point of the stack)
    let unvisited = ptsStack[0].getUnvisited();
    // WHEN I SAY TOP OF THE STACK, IM TALKING ABOUT ptsStack[0]
    // 3) While this variable is false (there are no unvisited neighbours)
    while (unvisited == false){
        ptsStack.splice(0,1);
        unvisited = ptsStack[0].getUnvisited();
    }
    // --> pop off the top point from the stack
    // --> if we empty the array, then we've reached the bottom and
    // can exit the program.
    // --> reassign the new variable to the the result of getUnvisited
    // from the point we just drew (top point of the stack)

    // if this variable returns a point instead, add that point
    // to the stack and draw a path to it.
    //  uv --> variable that contains unvisited Point
    //  ptsStack[0] --> point at the top of the stack
    //  uv.paths.push(ptsStack[0]);
    //  ptsStack[0].paths.push(uv);
    unvisited.visited = true;
    paths.push(new Path(ptsStack[0], unvisited, 'white'))
    ptsStack[0].paths.push(unvisited);
    unvisited.paths.push(ptsStack[0]);
    
    ptsStack.splice(0,0,unvisited);
}