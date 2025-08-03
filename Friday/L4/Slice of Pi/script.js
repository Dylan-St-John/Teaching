// 1) Create a function called 'validate' that validates the content
// of the form the user submitted. In my example, we need to make sure
// that:
// a) The user does not select more than 3 toppings
// b) The user only inputs 98101 as their zip code

function validate(){
    // a) Grad the element from the page and assign it to a variable
    // using getElementById
    let zipcode = document.getElementById("zip-input");
    console.log(zipcode);
    
    let counter = 0;
    // b) If the value of the zipcode element is not equal to the valid
    // zipcode, send an alert that says 'We only send to --this-- zipcode"
    toppings = document.getElementsByName('topping');
    console.log(toppings.length);
    // c) For every element with the name 'sauce', if that element
    // is checked, add to a counter. If that counter is greater than 2,
    // send an alert saying 'youve checked off too many sauces'

    // for every element in toppings
    for(i = 0; i < toppings.length; i++){
        // if that element is checked
        if (toppings[i].checked){
            // add to counter
            counter++;
        }
        // if counter is greater than 3
        if(counter > 3){
            // send an alert
            alert("No more than three toppings!")
            return false
        }
    }
    // return true or return false if the form is valid or not
}


// --> Make a function that, if validate works, creates an invoice
function makeInvoice(){
    // takes all of the elements from the page and creates the
    // order along with the total as an alert
}

function handle_click(){
    // if validate works
        // run create order
}