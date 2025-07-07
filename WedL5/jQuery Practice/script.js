// jQuery SELECTOR SYNTAX: $(selector).action()

// WHEN OUR DOCUMENT IS LOADED, RUN JQUERY:
$(document).ready(function(){

  // jQuery methods go here...
  $('button').click(function(){
    $('h1').css("background-color", "yellow");
    $('h1').css("color", "blue");
    $('#explanation').animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
  });

});

// BELOW IS A SHORTHAND:
//$(function(){

  // jQuery methods go here...

//});

// EXERCISES
// MAKE SURE TO: Select at least one element by an ID
// 1) Methods:
// --> css
// --> Add, Remove, Set
// --> Animations

// 2) Events
// --> Buttons Presses
// --> Key Presses
// --> Mouse Event

