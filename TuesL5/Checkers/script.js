$(document).ready(function(){    
    $("#start").click(function(){
        $(this).hide();
        $("#turn").html("Whites Turn")
        // Create a test piece (like a red square with a white piece) with jquery before automating the process
        $("#squares").append("<div class='white square'></div>")
        // for every row in the checkers board
            // for every column in the checkers board
                // if we are on an odd piece
                    // create a white square
                // otherwise
                    // add a red square, and give this square an ID
                    // EXAMPLE: ID for first red square: 1 1, second red
                    // square 1 2
                    // if the row is less than 2
                        // add a white
                    // else if the row is greater than 5
                        // add a black piece
    });
    // 2) Write to the console every time you click a piece
});