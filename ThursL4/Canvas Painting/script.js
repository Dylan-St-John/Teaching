const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d");
let drawing = false;

// 4) When the user clicks the screen, draw the red rectangle
canvas.onmousedown = function(){
    drawing = true;
}

canvas.onmousemove = function(event){
    console.log(event);
    if (drawing == true){
        let x = event.pageX - this.offsetLeft;
        let y = event.pageY - this.offsetTop;
        ctx.fillRect(x, y, 50, 50);
    }
}

canvas.onmouseup = function(){
    drawing = false;
}

//5) When you hold down the mouse button, you draw a trial of squares
// behind you  HINT: mouse move event
