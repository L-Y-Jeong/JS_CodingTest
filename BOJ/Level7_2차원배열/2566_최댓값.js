const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
var arr = []; 
for(let i = 0; i < 9; i++){
    var num = input[i].split(' ');
    num = num.map(Number);
    arr.push(num);
}
var max = arr[0][0];
var row = 0;
var col = 0;
for (let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
        if (max < arr[i][j]){
            max = arr[i][j];
            row = i;
            col = j;
        }
    }
}

console.log(max);
process.stdout.write((row + 1) + " " + (col + 1));
