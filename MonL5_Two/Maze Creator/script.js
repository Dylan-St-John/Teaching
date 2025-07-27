// 3) Create a Point object constructor that has the 
// following property/methods:
// a) Take in two parameters for its x and y coordinates

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const grid = [];

function Point(x, y){
    // b) property for its x and y coordinates
    this.x = x;
    this.y = y;
    // c) A method that draws that point to the screen (based on its x and 
    // y coordinates)
    this.draw = function(){
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, 5, 5);
    }
}

// TO TEST: Create an instance of this object and call 
// its draw method - you should see a point on the screen
// HINT: Objects, Object Methods/Properties, Object Constructor

// const testPoint = new Point(15, 15)
// const testPoint2 = new Point(25, 15);
// console.log(testPoint.x)
// testPoint.draw()
// testPoint2.draw()


// 4) How do we create all the points we need? What about storing
// them for future reference? --> Create a 2 dimensional array to
// store all of the points we are going to make

// a) Create a function called 'initialise' that will fill in
// an array with arrays called 'grid'. Make sure grid is a global
// variable declared at the top of your program

// HINT: Nested For Loop


// IF YOU ARE STRUGGLING WITH SOMEWHERE TO START, FOCUS ON MAKING
// ONE ROW OF POINTS
function initialise(){
    // fill in every row with points and draw those points
    // to the screen

    // Psuedocode:
    // for every row of points you wanna make
        // make an empty row
        // for every item you want in a row (columns)
            // create a new point and put it into the row
            // call the points draw method
        // put the filled-in row into the grid array
    for (j=0; j < 60; j++){
        row = []
        for (i = 0; i < 60; i++){
            point = new Point(8 + i * 10, 10 + j * 10);
            point.draw();
            row.push(point)
        }
        console.log(row)
        grid.push(row);
    }
}

initialise();