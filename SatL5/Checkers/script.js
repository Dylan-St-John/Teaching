$(document).ready(function() {
  $("#start").click(function() {
    $(this).hide();
    var id;
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
       
    } //end outer for loop
    $(".white.piece").click(function() {
        optionHelper($(this));

    })

    $(".black.piece").click(function() {
        optionHelper($(this));
    })

    function getOptions(color, row, col){
        //check color, "white" or "black"
        console.log(color, row, col)
    }
  
    function clearOptions(){
        
    }
  
    function optionHelper(clickedPiece){
        // console.log(clickedPiece);
        // 1) find the parent of the clicked piece
        parent = clickedPiece.parent();
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
