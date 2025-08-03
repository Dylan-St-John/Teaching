// 1) Create an array with numbers 1 through 10
// a) Print out the array using toString()
// b) Find the length of the array (it should be 10!)
// c) Add all of the numbers together and print it out to the 
// console (it should be 55!)
// d) Multiply all of the numbers together and print it out to the console 
// (it should be 3,628,800)

// 2) Create an empty array
// a) Add colors to the array using push() (these will be strings)
// b) Find the index of your favorite color using indexOf()
// c) Use indexOf() to see if your least favorite color is in the array
// d) Use the at() method to grab the last element in your array 
// e) Use the join() method to print to the console all of the elements
// in your array
// NEW:
// f) Add a new color to your array using splice
// g) Remove a different item using splice
// h) take half of the array and create a new array using slice


const snacks = [
    'goldfish', 
    'cheetoh puffs', 
    'chips', 
    'flaming hot cheetohs', 
    'chocolate', 
    'gummy nerd clusters'
];

// let everything = snacks[19];
// console.log(everything)

console.log(snacks[3])
console.log(snacks.at(-1));
snacks[0] = 'cheez-its';
console.log(snacks.length);
snacks.push('pineapple lumps');
console.log(snacks);
console.log(snacks.join(" and "));
let last_item = snacks.pop();
console.log(last_item);

let snack = snacks.shift();
console.log(snack);
console.log(snacks);

delete snacks[0];
console.log(snacks);