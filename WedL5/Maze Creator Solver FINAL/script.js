
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// used to store 2-Dimensional array of points
var pts = [];

// variable to set the size of the grid
var gridSize = 60;

// used to store all the paths
var paths = [];

// array which acts as a stack for the DFS algorithm
var ptsStack = [];

// make an array for our queue for our BFS search
var solveQueue = [];

// variables for start and end
var start = null;
var goal = null;

initialize()

// an interval is used to VISUALIZE the DFS algorithm's thinking
var mazeInterval = setInterval(createMaze, 1000);
// ^ we can remove this interval because we dont need its thinking anymore

// we can make a NEW interval to run a new function for our BFS SOLVER
// var solve = setInterval(BFSsolver, 50);

//Constructor for a point object
function Point(x, y) {
  this.x = x;
  this.y = y;

  // parent for BFS search
  this.parent = null;
  
  this.drawX = (x + 1) * 10;
  this.drawY = (y + 1) * 10;

  this.visitedDFS = false;
  this.visitedBFS = false;
  
  this.neighbors = [];
  
  this.paths = [];
  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(this.drawX - 2, this.drawY - 2, 4, 4);
    ctx.closePath();
  };

  this.getUnvisited = function() {
    // clear any visited neighbors from the array
    for (var i = this.neighbors.length - 1; i >= 0; i--) {
      if (this.neighbors[i].visitedDFS) {
        this.neighbors.splice(i, 1);
      }
    }

    // select a random unvisited neighbor if there are any
    if (this.neighbors.length > 0) {
      var idx = Math.floor(Math.random() * this.neighbors.length);
      return this.neighbors[idx];
    }
    else {
      return false;
    }
  };
}

function initialize(){
  for(var y = 0; y<gridSize; y++){
    var row = [];
    for(var x = 0; x<gridSize; x++){
      row.push(new Point(x, y));
      row[x].draw();
      if(y>0){
        
        /**
        * If there is a point above the current point
        * this adds that point to the current point's
        * neighbors list and adds the current point to
        * the vertical neighbor's neighbors list.
        */
        
        pts[y-1][x].neighbors.push(row[x]);
        row[x].neighbors.push(pts[y-1][x]);
      }
      if(x>0){
        
        /**
        * If there is a point to the right of the
        * current point this adds that point to the
        * current point's neighbors list and adds
        * the current point to the vertical neighbor's
        * neighbors list.
        */
        
        row[x-1].neighbors.push(row[x]);
        row[x].neighbors.push(row[x-1]);
      }
    }
    pts.push(row);
  }
  // pick a random point to start the stack and mark it as visited
  // Take this and make it a new helper function that returns a random
  // point in the maze ()

  // return pts[randomX][randomY];
  ptsStack.push(pickRandomPoint());
  ptsStack[0].visted = true;
  // createMaze()

  // comment out draw maze to see points
  // drawMaze()

  start = pickRandomPoint();
  start.visitedBFS = true;
  solveQueue.push(start);

  goal = pickRandomPoint();
  // push into our queue a random point to start
  // make our goal/end point
  console.log(pts);
}


function pickRandomPoint(){
  var randomX = Math.floor(Math.random() * gridSize);
  var randomY = Math.floor(Math.random() * gridSize);
  return pts[randomX][randomY];
}

/**

To visualize the maze we will need to be able to represent paths between the different
points. We can create path objects to do this.

What will a path need to store? What functionality should it have? What parameters
should it take in?

How can we keep track of all the paths we create?
**/

function Path(p1, p2, color){
  this.p1 = p1;
  this.p2 = p2;
  
  this.vertical = p1.drawX == p2.drawX;
  
  this.color = color
  this.draw = function(){
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    if (this.vertical){
      // how can we draw this better?

      // this code makes the corners look nice :)
      ctx.moveTo(p1.drawX,Math.min(p1.drawY,p2.drawY)-2);
      ctx.lineTo(p2.drawX,Math.max(p1.drawY,p2.drawY)+2);
    }
    else{
      ctx.moveTo(p1.drawX, p1.drawY);
      ctx.lineTo(p2.drawX, p2.drawY)
    }
    // how can we make our path look nicer on the corners?
    
    ctx.stroke();
    ctx.closePath();
  }
}

/* 
Finally, to draw the maze we will need to draw all the paths that have been
created many times over. How can we create a function to do this?
*/

function drawMaze(){
  // ctx.clearRect(0,0,canvas.width,canvas.height);
  for(var i = 0;i<paths.length;i++){
    paths[i].draw();
  }
}

function createMaze(){
  // What should this function do during one run? 
  // (Remember, this runs on an interval)
  // --> run drawMaze (drawing our paths)
  // --> draw the point at the top of the stack (ptsStack)
  // --> call getUnvisited function (within our points) on the top point   and store the returned point
  // while (true){
    drawMaze();
    var uv = ptsStack[0].getUnvisited();
    while (uv == false){
      // 'pop' the first item off the stack
      ptsStack.splice(0,1);
    
      if (ptsStack.length == 0){
        // we have reached the end of our ptsStack, which means the maze           is made
        //clearInterval(mazeInterval);
        return;
    }
    uv = ptsStack[0].getUnvisited();
    // if no more unvisted neighbors (returned false), then, in a loop,       search backwards popping off the top item in our stack until the         stack is empty aka we've gone all the way back to our original point
  }
  uv.visitedDFS = true;
  paths.push(new Path(ptsStack[0], uv, "white"))
  ptsStack[0].paths.push(uv);
  uv.paths.push(ptsStack[0]);
  ptsStack.splice(0,0,uv)
  
  // if the neighbor has NOT been visited (returns a point object): 
  // mark the point as visited,
  // add a path between this point and the top of the stack
  // add that point to the paths array at the top of the stack and visa       vera
  // finally, push the new point onto the stack
  // }
}


// We are going to need a new function to visualize our BFS solving! 
// Write down some ideas for how it should work (look at how createMaze works)

function BFSsolver(){
  drawMaze();
  goal.draw();
  start.draw();
  
  var pt = solveQueue.pop()
  console.log(pt)
  if (pt == goal){
    clearInterval(solver);
    drawSolution();
    return
  }
  pt.visitedBFS = true;
  for (var i = 0; i < pt.paths.length; i++){
    if(!pt.paths[i].visitedBFS){
      // if this is the case the points' parents property becomes equal
      // to the current point
      pt.paths[i].parent = pt
      solveQueue.splice(0,0,pt.paths[i])
      paths.push(new Path(pt, pt.paths[i], "green"))
      // add the point to the end of the solve queue
      // Lastly, add a new path between the two paths of a different              
      // color than the maze itself
    }
  }
}

function drawSolution(){
  // while there are still paths that are a part of our solver exist
    // pop them off of the paths array
    while(paths[paths.length-1].color === "green"){
      paths.pop();
    }
      
  var pt = goal;
  // while our pt.parent is not null, AKA while there is still a parent for the point
    // push a new path between the point and the points parent
    // set current point to parent

  // draw the maze, the goal and the start

  while(pt.parent != null){
    paths.push(new Path(pt,pt.parent,"red"));
    pt = pt.parent;
  }
  drawMaze();
  goal.draw();
  start.draw();
}


