$(document).ready(function(){
    const grid = [];

    function createGrid(){
        // let square = $("<div></div>").addClass("square")
        // let square_2 = "<div class='square'></div>"

        for (let i = 0; i < 4; i++){
            // const row = [];
            for (let i = 0; i < 4; i++){
                let square = document.createElement("div");
                square.className = 'square';
                // row.push(square);
                $("#grid").append(square);
            }
            // grid.push(row);
        }
    }
    
    createGrid();
    // console.log(grid);
});