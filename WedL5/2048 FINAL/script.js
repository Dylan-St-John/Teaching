var board = [];
var LEFT = 37;
var RIGHT = 39;
var UP = 38;
var DOWN = 40;
var playing = true;
var notMoving = true;
var score, scoreDisplay, highscoreDisplay;
var highscore = 0;
function Tile(){
    this.value = 0;
    this.merged = false;
}

function addRandom(){
    var i, j;

    do{
        var i = Math.floor(Math.random()*4);
        var j = Math.floor(Math.random()*4);
    }
    while(board[i][j].value != 0);
    if(Math.floor(Math.random()*10) < 2){
        board[i][j].value = 4;
    }
    else{
        board[i][j].value = 2;
    }
    var id = i+"_"+j;
    $("#tiles").append($("<p class='tile s"+board[i][j].value+"' id='"+id+"'><b>"+board[i][j].value+"</b></p>"));
    $("#"+id).css({
        "margin-left": .25+j*4.5+"rem",
        "margin-top": .25+i*4.5+"rem",
    });
}

function anotherPlayIsPossible(){
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[i].length; j++){
            if(board[i][j].value == 0){
                return true;
            }
            else if(j < board.length-1 && board[i][j].value == board[i][j+1].value){
                return true;
            }
            else if(i < board.length-1 && board[i][j].value == board[i+1][j].value){
                return true;
            }
        }
    }
    return false;
}
function reDrawTiles(){
    $("#tiles").empty();
    for(var i = 0; i < board.length; i++){
    for(var j = 0; j < board[i].length; j++){
        board[i][j].merged = false;
        if(board[i][j].value != 0){
            var id = i+"_"+j;
            $("#tiles").append($("<p class='tile s"+board[i][j].value+"'id='"+id+"'><b>"+board[i][j].value+"</b></p>"));
            $("#"+id).css({
                "margin-left": (.25+j*4.5)+"rem",
                "margin-top": .25+i*4.5+"rem",
            });
        }
    }
    }
}

function endOfTurn(moveOccured) {
    notMoving = true;
    if(moveOccured){
        var scorePrefix = "<span class='badge badge-secondary'>Score:<br/>";
        scoreDisplay.html(scorePrefix+score)
        if (score > highscore){
            var highscorePrefix = "<span class='badge badge-secondary'>Best:<br/>";
            highscore = score;
            // save new high score to local storage
            localStorage.setItem("highScore", highscore)
            highscoreDisplay.html(highscorePrefix+highscore);
        }

        reDrawTiles();
        addRandom();
        playing = anotherPlayIsPossible();
        if (!playing){
            $("#overlay").slideDown(1000, function(){
                $(".game-over").fadeIn(1000);
            });
        }
    }
}

function shiftUp(){
    var moved = false;
    var total = 0;
    var numMoved = 0;
    for(var i = 1; i < board.length; i++){
        for(var j=0; j<board[i].length; j++){
            if (board[i][j].value != 0){
                var r = i;
                total ++;
                while(r > 0 && board[r-1][j].value == 0){
                    moved = true;
                    board[r-1][j].value = board[r][j].value;
                    board[r][j].value = 0;
                    r--;
                }
                if(r > 0 && !board[r-1][j].merged){
                    if(board[r-1][j].value == board[r][j].value){
                        moved = true;
                        board[r-1][j].value *=2;
                        score += board[r-1][j].value
                        board[r][j].value = 0;
                        board[r-1][j].merged = true;
                        r--;
                    }
                }
                $("#"+i+"_"+j).animate({"margin-top":.25+r*4.5+"rem"}, 100,function(){
                    numMoved++;
                    if(numMoved == total){
                        endOfTurn(moved);
                    }
                });
            }
        }
    }
}

function shiftDown(){
    var moved = false;
    var total = 0;
    var numMoved = 0;
    for(var i = board.length-2; i >= 0; i--){
        for(var j=0; j<board[i].length; j++){
            if (board[i][j].value != 0){
                total++;
                var r = i;
                while(r < board.length-1 && board[r+1][j].value == 0){
                    moved = true;
                    board[r+1][j].value = board[r][j].value;
                    board[r][j].value = 0;
                    r+=1;
                }
                if(r < board.length-1 && !board[r+1][j].merged){
                    if( board[r+1][j].value == board[r][j].value){
                        moved = true;
                        board[r+1][j].value *=2;
                        score += board[r+1][j].value
                        board[r][j].value = 0;
                        board[r+1][j].merged = true;
                        r++;
                    }
                }
                $("#"+i+"_"+j).animate({"margin-top":.25+r*4.5+"rem"}, 100,function(){
                    numMoved++;
                    if(numMoved == total){
                        endOfTurn(moved);
                    }
                });
            }
        }
    }
}

function shiftLeft(){
    var moved = false;
    var total = 0;
    var numMoved = 0;
    for(var i = 1; i < board.length; i++){
        for(var j=0; j<board[i].length; j++){
            if (board[j][i].value != 0){
                total++;
                var c= i;
                while(c > 0 && board[j][c-1].value == 0){
                    moved = true;
                    board[j][c-1].value = board[j][c].value;
                    board[j][c].value = 0;
                    c--;
                }
                if(c > 0 && !board[j][c-1].merged){
                    if(board[j][c-1].value == board[j][c].value){
                        moved = true;
                        board[j][c-1].value *=2;
                        score += board[j][c-1].value
                        board[j][c].value = 0;
                        board[j][c-1].merged = true;
                        c--;
                    }
                }
                $("#"+j+"_"+i).animate({"margin-left":.25+c*4.5+"rem"}, 100,function(){
                    numMoved++;
                    if(numMoved == total){
                        endOfTurn(moved);
                    }
                });
            }
        }
    }
}

function shiftRight(){
    var moved = false;
    var total = 0;
    var numMoved = 0;
    for(var i = board.length-2; i >= 0; i--){
        for(var j=0; j<board[i].length; j++){
            if (board[j][i].value != 0){
                total++;
                var c = i;
                while(c < board.length-1 && board[j][c+1].value == 0){
                    moved = true;
                    board[j][c+1].value = board[j][c].value;
                    board[j][c].value = 0;
                    c++;
                }
                if(c < board.length-1 && !board[j][c+1].merged){
                    if( board[j][c+1].value == board[j][c].value){
                        moved = true;
                        board[j][c+1].value *=2;
                        score += board[j][c+1].value
                        board[j][c].value = 0;
                        board[j][c+1].merged = true;
                        c++;
                    }
                }
                $("#"+j+"_"+i).animate({"margin-left":.25+c*4.5+"rem"}, 100,function(){
                    numMoved++;
                    if(numMoved == total){
                        endOfTurn(moved);
                    }
                });
            }
        }
    }
}

function createGrid(){
    board = []
    for(var i = 0; i < 4; i++){
        var row = [];
        for(var j = 0; j < 4; j++){
            row.push(new Tile(i,j));
            $("#grid").append($("<div>", {class: "square"}));
        }
        board.push(row);
    }
}

function init(){
    notMoving = true;
    playing = true;
    // set up score
    score = 0;
    scoreDisplay = $("#score");
    var scorePrefix = "<span class='badge badge-secondary'>Score:<br/>";
    scoreDisplay.html(scorePrefix+score)
    // set up high score
    highscoreDisplay = $("#highscore")
    var highscorePrefix = "<span class='badge badge-secondary'>Best:<br/>";
    // get high score out of local storage and check if it is non-null
    highscore = localStorage.getItem('highScore');
    highscore = highscore ? highscore: 0;
    highscoreDisplay.html(highscorePrefix+highscore);
    $("#overlay").hide();
    $(".game-over").hide();
    for(var i = 0; i < board.length; i++){
        for(var j = 0; j < board[i].length; j++){
            board[i][j].merged = false;
            board[i][j].value = 0;
        }
    }
    reDrawTiles();
    for(var i = 0; i < 2; i++){
        addRandom();
    }
}

$(function(){
    createGrid();
    init();
    $(this).keydown(function(e){
        if(playing && notMoving){
            switch(e.which){
                case UP:
                    notMoving = false;
                    shiftUp();
                    break;
                case DOWN:
                    notMoving = false;
                    shiftDown();
                    break;
                case LEFT:
                    notMoving = false;
                    shiftLeft();
                    break;
                case RIGHT:
                    notMoving = false;
                    shiftRight();
                    break;
            }
        }
    });
});