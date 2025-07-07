var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

drawRect(-10, -10, 200, 180, "red");
drawRect(190, 240, 130, 130, "darkBlue");
drawRect(-10, 240, 50, 170, "yellow");
drawLine(0, 170, 400, 170);
drawLine(0, 240, 400, 240);
drawLine(190, 0, 190, 400);
drawLine(320, 240, 320, 400);


// Drawing Functions
// Draw line function
function drawLine(startX, startY, endX, endY, color, lineWidth) {
  if (color === undefined) {
    color = "black";
  }
  if (lineWidth === undefined) {
    lineWidth = 10;
  }
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

// Function to draw a rectangle
function drawRect(startX, startY, width, height, color, lineWidth, lineColor) {
  if (lineColor === undefined) {
    lineColor = "black";
  }
  if (lineWidth === undefined) {
    lineWidth = 10;
  }
  ctx.beginPath();
  ctx.rect(startX, startY, width, height);
  ctx.strokeStyle = lineColor;
  ctx.fillStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.fill();
  ctx.stroke();
}

// Function to draw a circle
function drawCircle(centerX, centerY, radius, color) {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
}