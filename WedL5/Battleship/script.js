const col = 10;
const row = 10;
const playerGrid = [];

$(document).ready(function(){

    // This function should initialise both game boards
    function init(){
        // this nested for loop generates the game_boards
        // 1) Fill in both boards (this code only fills in the player)
        for (let j = 0; j < row; j++){
            rowArray = []
            for (let i = 0; i < col; i++){
                let id = j + " " + i;
                let txt1 = '<div id="' + id + '" class="gridsquare"></div>';

                // you can also do it like this
                // let txt2 = $("<div></div>").addClass('gridsquare')

                $("#player").append(txt1);
                rowArray.push("W");
            }
            playerGrid.push(rowArray);
        }
        console.log(playerGrid);
    }

    init();

});
