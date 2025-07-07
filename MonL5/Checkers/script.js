$(document).ready(function() {
    $("#start").click(function() {
        console.log('here');
        $(this).hide();
        $('#turn').html("Whites Turn")
        white_square = document.createElement("div");
        white_square.className = "white square";
        $('#squares').append(white_square);
        // for every row
            // for every column
                // if we are on a odd column number
                    // create a white square
                // otherwise
                    // create an id attached to a red square
                    // then add a piece to that red square 
                    // --> white pieces in first 3 rows
                    // --> black pieces in last 3 rows
                    var str = "div class = 'red square' id=" + i + "_" + j + "></div>" 
    });
});