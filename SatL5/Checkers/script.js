$(document).ready(function() {
  $("#start").click(function() {
    var id;
    const options = [];
    let whiteTurn = true;
    let selected;

    $(this).hide();
    for (var i = 0; i < 8; i++){
      for (var j = 0; j < 8; j++){
        if ((i+j)%2 == 0){
          $("#squares").append($("<div>", {class: "white square"}));
        }
        else {
          id = i + "_" + j;
          $("#squares").append($("<div>", {class: "red square", id: id}));
          
          //we also add the pieces here!
          if (i <= 2) {
            $("#"+id).append($("<div>", {class: "white piece"}));
          }
          else if (i >= 5){
            $("#"+id).append($("<div>",{class: "black piece"}));
          }
          
        } //end if/else
      }//end inner for loop
    
    function changeTurnText(){
      if (whiteTurn){
        $("#turn").text("Whites Turn");
      }
      else{
        $("#turn").text("Blacks Turn");
      }
    }
    changeTurnText();
    
    } //end outer for loop
    $(".white.piece").click(function() {
      if(whiteTurn){
        optionHelper($(this));
      }
    })

    $(".black.piece").click(function() {
      if(!whiteTurn){
        optionHelper($(this));
      }
    })

    $(".red.square").click(function(){
      // if the red squares color is the option color
      if ($(this).css("background-color") == "rgb(255, 255, 0)"){
        // we move the piece to that location
        $(this).append(selected);
        // clear options again
        clearOptions();
        // change the turn to the other players
        whiteTurn = !whiteTurn;
        changeTurnText();
      }

    })

    function getOptions(color, row, col){
        //check color, "white" or "black"
        console.log(color, row, col)
        let option;
        // if the color of the piece is white
        if (color == "rgb(228, 201, 242)"){
          option = $('#' + (row+1) + '_' + (col-1))
          // if option is a parent
          if(option.is(":parent")){
            // if options child (piece) is the same colour
            // as the options --> for jumping over pieces
              // we can present the option 
              // options.push($('#' + (row+1) + '_' + (col-1)))
              // options.push($('#' + (row+1) + '_' + (col+1)))
              //options.push(option)

          }
          // otherwise (if it isnt a parent)
          else{
            options.push(option)
          }
            

          option = $('#' + (row+1) + '_' + (col+1))
          // if option is a parent
          if(option.is(":parent")){
            // if options child (piece) is the same colour
            // as the options --> for jumping over pieces
              // we can present the option 
              //options.push(option)

          }
          // otherwise (if it isnt a parent)
          else{
            options.push(option)
          }
        }
        // otherwise if the color of the piece is black
        else if (color == "rgb(46, 23, 58)"){
          option = $('#' + (row-1) + '_' + (col-1))
          // if option is a parent
          if(option.is(":parent")){
            // if options child (piece) is the same colour
            // as the options --> for jumping over pieces
              // we can present the option 
              //options.push(option)

          }
          // otherwise (if it isnt a parent)
          else{
            options.push(option)
          }
            

          option = $('#' + (row-1) + '_' + (col+1))
          // if option is a parent
          if(option.is(":parent")){
            // if options child (piece) is the same colour
            // as the options --> for jumping over pieces
              // we can present the option 
              //options.push(option)

          }
          // otherwise (if it isnt a parent)
          else{
            options.push(option)
          }
        }

        console.log(options)
        for (i=0;i<options.length;i++){
          options[i].css("background-color", "yellow");
        }

    }
  
    function clearOptions(){
        // for every option
        for (let i = options.length-1; i >= 0; i--){
          // change its ccs back to its default color
          options[i].css("background-color", "#856993");
          // remove all the options from the options list
          options.splice(i,  1)
          // HINT: jQuery CSS, JS Array Methods
        }

    }
  
    function optionHelper(clickedPiece){
        // console.log(clickedPiece);
        clearOptions();
        // 1) find the parent of the clicked piece
        parent = clickedPiece.parent();
        selected = clickedPiece;
        // console.log(parent);
        // 2) Extract the row and column of the parent square
        pid = parent.attr("id").split("_")
        // console.log(pid);
        // 3) run getOptions with the color of the piece and the
        // squares row and col values
        getOptions(clickedPiece.css("background-color"), parseInt(pid[0]), parseInt(pid[1]));
        // HINT: jQuery Traversing, jQuery Get, jQuery CSS
    }
  
  }); //end click function

}); //end of ready function
