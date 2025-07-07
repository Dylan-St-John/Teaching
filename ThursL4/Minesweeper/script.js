console.log('test');

board = document.getElementById('board');
console.log(board.rows[0]);

const rows = board.rows.length;
const columns = board.rows[0].cells.length;
const array = [];

// 2-PRACTICE: Create a two dimensional array in javascript 
// (5 rows and 5 columns) filled with 0s

// 2) store all of the table data elements in a two dimensional
// array called 'array'

for (let r = 0; r < rows; r++){
    row = [];
    for (let c = 0; c < columns; c++){
        cell = board.rows[r].cells[c]
        row.push(cell)
        cell.addEventListener("click", test(r, c))
    }
    array.push(row);
}

// This is how you access an item in a two dimensional array
console.log(array);

function test(row, column){
    console.log("testing.." + row + " " + column)
}
// 4) Adding in mines - where do we start?
