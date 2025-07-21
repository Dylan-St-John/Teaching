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
        // cell.addEventListener("click", test(r, c))
        // If rolled the dice and it says 'make a mine',
        if (Math.floor(Math.random) * 10 > 8){
            // give this cell the attribute mine
            cell.setAttribute("mine", 1);
            // make it so when I click this mine, it gives me an alert
            cell.addEventListener("click", alert("You go splody"));
        }
    }
    array.push(row);
}

// This is how you access an item in a two dimensional array
console.log(array);

function test(row, column){
    console.log("testing.." + row + " " + column)
}
// 4) Adding in mines - where do we start?


// PSUEDOCODE FOR MINES TOUCHING:
// function check if touching other mines
    // minecount = 0
    // for every row neighbour
        // for every column neighbour
            // if we are not on our current square and we are not on the edges
                // if our mine attribute is 1
                    // add to the mine count
    // if minecount is equal to 0
        // for every row neighbour
            // for every column neighbour
                // if we are not on our current square and we are not on the edges
                    // if there is nothing written ontop of the square (innerText)
                        // run this function again with that square that we are checking