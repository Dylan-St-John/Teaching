// Set up french flag
var france = document.getElementById("france");
var fctx = france.getContext("2d");
france.width = 300;
france.height = 200;
drawRect(fctx, 0, 0, france.width / 3, france.height, "red");
drawRect(fctx, france.width * 2 / 3, 0, france.width, france.height, "blue");

// Set up japanese flag
var japan = document.getElementById("japan");
var jctx = japan.getContext("2d");
japan.width = 300;
japan.height = 200;
drawCircle(jctx, japan.width / 2, japan.height / 2, 60, "red");

// Set up swiss flag
var swiss = document.getElementById("swiss");
var sctx = swiss.getContext("2d");
swiss.width = 250;
swiss.height = 250;
drawRect(sctx, 0, 0, swiss.width, swiss.height, "red");
drawRect(sctx, swiss.width * 5 / 12, swiss.height / 6, swiss.width / 6, swiss.height * 2 / 3 , "white");
drawRect(sctx, swiss.width / 6, swiss.height * 5/12, swiss.width * 2 / 3, swiss.height / 6, "white");

// Set up chinese flag
var china = document.getElementById("china");
var cctx = china.getContext("2d");
china.width = 300;
china.height = 200;
drawRect(cctx, 0, 0, china.width, china.height, "red");
drawStar(cctx, china.width / 6, china.height / 4, china.width / 10, "yellow");
drawStar(cctx, china.width / 3, china.height / 10, china.width / 30, "yellow");
drawStar(cctx, china.width * 2/5, china.height / 5, china.width / 30, "yellow");
drawStar(cctx, china.width * 2/5, china.height * 7/20, china.width / 30, "yellow");
drawStar(cctx, china.width / 3, china.height * 9/20, china.width / 30, "yellow");


// Drawing Functions
// Draw line function
function drawLine(ctx, startX, startY, endX, endY, color, lineWidth) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

// Function to draw a rectangle
function drawRect(ctx, startX, startY, width, height, color) {
  ctx.beginPath();
  ctx.rect(startX, startY, width, height);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
}

// Function to draw a circle
function drawCircle(ctx, centerX, centerY, radius, color) {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
}

// Function to draw a triangle
function drawTriangle(ctx, p1X, p1Y, p2X, p2Y, p3X, p3Y, color) {
  ctx.beginPath();
  ctx.moveTo(p1X, p1Y);
  ctx.lineTo(p2X, p2Y);
  ctx.lineTo(p3X, p3Y);
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
}

// Function to draw a star
function drawStar(ctx, cx, cy, radius, color) {
  var d1 = Math.sin(2 * Math.PI / 5) * radius;
  var d2 = Math.cos(2 * Math.PI / 5) * radius;
  var d3 = Math.sin(2 * Math.PI / 10) * radius;
  var d4 = Math.cos(2 * Math.PI / 10) * radius;
  ctx.beginPath();
  ctx.moveTo(cx, cy - radius);
  ctx.lineTo(cx + d3, cy + d4);
  ctx.lineTo(cx - d1, cy - d2);
  ctx.lineTo(cx + d1, cy - d2);
  ctx.lineTo(cx - d3, cy + d4);
  ctx.closePath();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1;
  ctx.fill();
  ctx.stroke();
}

