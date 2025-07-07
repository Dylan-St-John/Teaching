const canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

canvas.onmousedown = function(e){
    ctx.beginPath();
    ctx.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
}

canvas.onmousemove = function(e){
    ctx.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    ctx.stroke();
}

canvas.onmouseup = function() {
    ctx.closePath();
}
  