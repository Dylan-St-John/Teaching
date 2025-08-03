//If the sort button is pressed, this function will be called:
document.getElementById("startButton").onclick = function() {

  //First we want to get the value from the input field
  var str = document.getElementById("userInputString").value;

  //If there is nothing in the field, we ask the user to enter some number and 
  //quit this function (call "return")
  if (str == "") {
    document.getElementById("sortedNums").innerHTML = "Please Enter some numbers ";
    return;
  }
  //If there was a value, we set it up to show the sorted numbers:
  document.getElementById("sortedNums").innerHTML = "Sorted Numbers: ";

  //We can use JavaScript function "split" to take a string and create an array 
  //from the elements of the string:
  var nums = str.split(",");
  //Make sure these are treated as number:
  for (var i = 0; i < nums.length; i++) {
    nums[i] = parseInt(nums[i]);
  }

  //Here is where we do the actual soring:
  /*var sortedNums = simpleSort1(nums);
  nums = sortedNums;
  */
  //simpleSort2(nums);
  bubbleSort(nums);
  //otherSort(nums);

  //Finaly we display the sorted numbers:
  document.getElementById("sortedNums").innerHTML += nums.toString();

}

//function that finds maximum element in an array and returns its index
function findMaxElement(data) {

  // first we have to create the variables that will keep track of the max numbers.
  //We initialize them to the first element in the array
  var maxNumber = data[0];
  var indexOfMaxNumber = 0;

  //Now we go through the rest of the array to see if we find a larger number
  for (var i = 1; i < data.length; i++) {
    if (data[i] > maxNumber) {
      maxNumber = data[i];
      indexOfMaxNumber = i;
    }
  }

  return indexOfMaxNumber;
}

function simpleSort1(nums) {
  var sortedNums = [];

  while (nums.length > 0) {
    var maxNumIndex = findMaxElement(nums);
    sortedNums[sortedNums.length] = nums[maxNumIndex];
    nums.splice(maxNumIndex, 1);
  }

  return sortedNums;
}

function simpleSort2(nums) {
  for(var i=0; i<nums.length; i++) {
    //Find the largest number from i to the end of array
    var maxNumber = nums[i];
    var indexMaxNumber = i;
    for(var j=i; j<nums.length; j++) {
      if(nums[j]>maxNumber) {
        maxNumber = nums[j];
        indexMaxNumber = j;
      }
    }
    
    //swap the largest number with the number at the start of the sequence:
    var temp = nums[i];
    nums[i] = nums[indexMaxNumber];
    nums[indexMaxNumber] = temp;
      
  }
}

function bubbleSort(nums) {
  for(var i=nums.length-1; i>=0; i--) {
    for(var j=1; j<=i; j++) {
      if(nums[j] > nums[j-1]) {
        //in this case, swap the two numbers
        var temp = nums[j];
        nums[j] = nums[j-1];
        nums[j-1] = temp;
      }
    }
  }
}


function otherSort(nums) {
  for (var i = 1; i < nums.length; i++) {
    var j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      var temp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;
      j--;
    }
  }
}