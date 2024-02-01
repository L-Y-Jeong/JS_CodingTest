const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var n = parseInt(input[0]);
var arr = input[1].split(' ');
arr1 = arr.map(Number);
// var max = Math.max(...arr1);
// var min = Math.min(...arr1);

var max = arr1[0];
var min = arr1[0];

for(let i = 1; i < n; i++){
    if (max < arr1[i]){
        max = arr1[i];
    }
    if (min > arr1[i]){
        min = arr1[i];
    }
}


console.log("%d %d", min, max);
