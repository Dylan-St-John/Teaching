var input = document.getElementById("sentence");
var button = document.getElementById("count");

button.onclick = function() {
  var sent = input.value;
  var count = 0;
  for(var i =0; i<sent.length; i++ )
    if(sent.charAt(i)==="a") {
      count++;
    }
  alert("This string has "+count+" times letter \"a\"");
}

