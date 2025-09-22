let rows = 5;
let cols = 5;
let map = [];

for (let i = 0; i < rows; i++) {
  let row = [];
  for (let j = 0; j < cols; j++) {
    row.push(".");  // fill with "."
  }
  map.push(row);
}

console.log("Treasure Map:");
console.log(map);