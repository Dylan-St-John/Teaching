// 1) Write to the console OR make an alert that says
// "button has been pressed" when you press the submit button
// to test that your javascript file is loaded.

// 2) Create a function called 'validate' that validates the 
// order your user submitted.

// what does validating my order mean?
// --> a) Make sure the user does not select more than three toppings
// --> b) Making sure the zip code is 98101


function validate(){
    // below I validate one part, but I still need to validate
    // the checkboxes.
    var zipcode = document.getElementById("zip-input");
    console.log(zipcode.value);
    if (zipcode.value != 98101){
        alert("Thats the wrong zipcode, try again")
    }

    var toppings = document.getElementsByName("topping")
    console.log(toppings[3].checked);
    // TASK: Add validation to rest (In the class example, that will be
    // for the toppings)
    // HINT: Loops, Elements by name
}

// 3) Create a function called 'makeInvoice' that generates the string
// that shows the user their full order once theyve hit order

function makeInvoice(){
    order = "";
    total = 0;
    // a) Figure out what all the user inputs are
    // EXAMPLE: the user inputs 15" as their size
    // --> make a variable that contains the size they selected
    // --> add that value to total
    // b) Take all of the variables from the user inputs and add them
    // to a string for the final order
}