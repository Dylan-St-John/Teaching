// 1) Create an array with numbers 1 through 10
// ○ Print out the array using toString()
// ○ Find the length of the array (it should be 10!)
// ○ Add all of the numbers together and print it out to the 
// console (it should be 55!)
// ○ Multiply all of the numbers together and print it out to the console 
// (it should be 3,628,500)

// 2) Create an empty array
// ○ Add colors to the array using push() (these will be strings)
// ○ Find the index of your favorite color using indexOf()
// ○ Use indexOf() to see if your least favorite color is in the array
// ○ Use the at() method to grab the last item in your array 
// Use the join() method to print to the console all of the items
// in your array seperated with " and "

console.log("test")

const groccery_list = [
    "Reese's Peanut Butter Cup", 
    "Chicken Tenders", "Dino Nuggets", 
    "2% 2L Milk Carton", 
    "Dr. Pepper"
];

console.log(groccery_list);
console.log(groccery_list[5]);

groccery_list[1] = "Tortilla Chips";
console.log(groccery_list);

console.log(groccery_list.toString());
console.log(groccery_list.length);

groccery_list.push("Donuts");
console.log(groccery_list);

// AVOID THIS:
groccery_list[1000] = "Muffins";
console.log(groccery_list);

