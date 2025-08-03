var imgWidth = 25;
var imgHeight = 20;
var rows = 6;
var columns = 6;
var imgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg";

function init(){
  // 1) Change the header to say "Solve the Puzzle!"
  $("h1").text("Solve the Puzzle!");
  // 2) Hide the final image
  $("#final").hide();
  // console.log("test")
  $("#difficulty").hide();
  var puzzle = [];
  // 3) fill in the puzzle array with string text that contains 
  //new elements (puzzle pieces) that will be inserted into the pieces 
  // id div
  for(var row = 0; row < rows; row++){
    for(var col = 0; col < columns; col++){
      // push into the puzzle array a new div (just a string) with 
      // the class 'imgContainr' with an img src the same as the puzzles 
      //source with any margin styling needed (based off of which row 
      // and column you are at)

      // INFO: Create a string that says '<div class='imgContainer>
      //<img src="" style='margin-left:... margin-top: ... </img></div>'
      
      // EXAMPLE: console.log(puzzle[0]) --> 
      //"<div class=imgContainer><img src="..." style='margin-left: --> 
      // MATH WITH ROWS AND COLUMNS (r and c) + margin-top: 
      // --> MORE MATH WITH ROW AND COL">
      // </div>)
        puzzle.push("<div class='" + (row*columns+col) +" imgContainer'>" +
          "<img src=" + imgSrc + 
          "  style='margin-left: -" +(col*imgWidth/columns)+ "rem;" + 
          " margin-top: -" + (row*imgHeight/rows) + "rem;'></img></div>")
    }
  }
  
  // 4) For each entry in the puzzles array, add that piece 
  //(which is a string with a div and an img inside) to the puzzles div 
  // (JQUERY!)
  puzzle.forEach(function(piece){
    $('#pieces').append(piece)
  });

  // 5) Give each imgContainer custom css so that only certain parts of 
  // the img are showing based on the crop from earlier
  $(".imgContainer").css({
    "width": imgWidth/columns+"rem",
    "height": imgHeight/rows+"rem"
  });
  
  // 6) Make each puzzle piece draggable 
  $("#pieces > .imgContainer").draggable();
  // 7) Randomise the location of each puzzle piece when it spawns in. 
  // HINT: Sorting Algorithm swaps

}

// When the large image is clicked, run init
$(function(){
  $("#final").click(init);
});