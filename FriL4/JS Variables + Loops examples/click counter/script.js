// Variables

// Get HTML Elements
var count1btn = document.getElementById("count1");
var count2btn = document.getElementById("count2");

// Initialize Count Variables
var count1 = 0;
var count2 = 0;

// Functions
// Onclick Stuf
count1btn.onclick = function() {
  count1 += 1;
  count1btn.innerHTML = "Clicked: "+count1;
}

count2btn.onclick = function() {
  count2 += 1;
  count2btn.innerHTML = "Clicked: "+count2;
}