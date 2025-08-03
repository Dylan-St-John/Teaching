const col = 10;
const row = 10;
const playerBoard = [];
const compBoard = [];
const compGuessBoard = [];

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
                $("#computer").append(txt1);
                rowArray.push("W");
            }
            playerBoard.push(rowArray);
            compBoard.push(rowArray.slice());
            compGuessBoard.push(rowArray.slice());
        }
    }

    init();

    // 2) Create an object constructor for a Ship.
    // It should require (to create it, parameters): 
    // a name, a size and which board it will be on
    // TO TEST: Create an instance of the Ship and print out its name
    // Names are: Carrier, Battleship, Cruiser, Submarine, and Destroyer
    // HINT: Object Constructors

    function Ship(name, size, board){
        this.name = name;
        this.size = size;
        this.board = board;

        this.place = function(){
            this.board[3][3] = "S"
            this.board[3][4] = "S"
            this.board[3][5] = "S"
        }
    }

    cruiser = new Ship("Cruiser", 3, playerBoard);
    console.log(cruiser.name);
    cruiser.place();
    console.log(playerBoard);

    // 3) Create an method called 'place' that finds a place 
    // to put the ship.
    // SHIP PLACEMENT IDEAS:
    // 1) Change the colour of the gridsquare to a player
    // 2) Randomised placement
    // 3) Ship has a structure
    // --> size (how many squares long)
    // --> orientation (is it horizontal or vertical?)
    // 4) Ships are in the grid

});
