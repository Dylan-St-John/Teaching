var canvas = document.getElementById("theCanvas");
var button = document.getElementById("clear");

var context = canvas.getContext("2d");

var isDrawing = false;

canvas.width = 500;
canvas.height = 300;

// The the path tools are formatted
// differently than the Rectangles
// *stroke*Style to change color
// not *fill*Style
context.strokeStyle = "red";
context.lineCap = "round"; // Makes it rounder
context.lineWidth = 5;

///////////////////////////////////

// The code is very similar in the
// core structure, but there are a few
// nuances to making paths
canvas.onmousedown = function(e) {
  isDrawing = true;
  
  // First; When mouse is pressed down
  // Open a new path.
  context.beginPath();
  
  // This sets the start point of the path
  context.moveTo(e.pageX - this.offsetLeft, 
                 e.pageY - this.offsetTop
                );
  
}

canvas.onmousemove = function(e) {
  if (isDrawing) {
    // Adds a section to the path at every
    // mousemove event
    context.lineTo(e.pageX - this.offsetLeft, 
                   e.pageY - this.offsetTop
                  );
    
    // Draws the current path to the canvas.
    context.stroke();
  }
}

canvas.onmouseup = function() {
  isDrawing = false;
  
  // One extra step to close the path.
  // This is vital for the clear button.
  // Without it, all old scribbles will
  // reappear once you start to draw again.
  context.closePath();
}

///////////////////////////////

button.onclick = function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}


// This is an example of how students can combine other
// skills to expand on the project.
var sizeUp = document.getElementById("sizeUp");
var sizeDown = document.getElementById("sizeDown");

sizeUp.onclick = function() {
  context.lineWidth++;
}

sizeDown.onclick = function() {
  if (context.lineWidth > 1)
    context.lineWidth--;
}

var blueButton = document.getElementById("blue");
var redButton = document.getElementById("red");
var greenButton = document.getElementById("green");

blue.onclick = function() {
  context.strokeStyle = "blue";
}

red.onclick = function() {
  context.strokeStyle = "red";
}

green.onclick = function() {
  context.strokeStyle = "green";
}