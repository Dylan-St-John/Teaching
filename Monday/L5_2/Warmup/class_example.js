treasureMap = [];

// 1)
// treasureMap = [
//     [],
//     [],
//     ...
// ]

// BONUS
for (let i = 0; i < 5; i++){
    let row = []
    for (let j=0; j < 5; j++){
        row.push(".");
    }
    treasureMap.push(row);
}

console.log(treasureMap);