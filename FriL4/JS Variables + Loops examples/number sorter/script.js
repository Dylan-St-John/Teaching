var startButton = document.getElementById("startButton");

startButton.onclick = function() {
  var inputField = document.getElementById("userInputString");
  var str = inputField.value;
  
  var oriString = [];
  var newString = [];

  //build an array from the original string
  for (var i = 0; i < str.length; i++) {
    oriString[i] = str.charAt(i);
  }
  
  //create the reverse array
  for (var i = 0; i < str.length; i++) {
    var j = str.length - 1 - i;
    newString[i] = oriString[j];
  }

  inputField.value = newString.join("");

}