// What is JQuery? 
// Where can I find information about it? 
// What parts of this program can we write in JQuery?

// a) Moving the puzzle pieces
// b) Sensing if theyre in the correct spot
// c) Create all the puzzle pieces

// 3) Make your example puzzle piece draggable.
// HINT: Jquery UI documentation
$(document).ready(function(){

    
    // 4) When the user clicks on the image, hide the image and change
    // the header to say "solve the puzzle!"
    $('#final').click(function(){
        $(this).hide();
        $('h1').text("Solve the Puzzle!");

        //5 Automate the creation of creating a full puzzle piece set 
        // HINT: JQuery add Elements

        // a) Create a puzzle piece using jquery
        $('#pieces').append('<div class="imgContainer"><img src="https://i.redd.it/a4pu8ndutofe1.jpeg" style="margin-left: -20rem; margin-top:-0rem;" ></div>') 
        $('#pieces').append('<div class="imgContainer"><img src="https://i.redd.it/a4pu8ndutofe1.jpeg" style="margin-left: -15rem; margin-top:-15rem;" ></div>')   

        // b) Automation
        // for every row of puzzle pieces you want to make
            // for every column of puzzle pieces you want to make
                // add to the div with id 'pieces' a div (puzzle piece)
                // with the puzzle img inside (what image you
                // want on your puzzle piece)
                // then put it into an array
                
        // for every puzzle piece in the array
            // make it draggable
       
        $(function() {
            $(".imgContainer").draggable();
        });        
    });
    
    console.log('test')


});
