var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var n = parseInt(input[0]);
var arr = input[1];
var num_arr = [...arr];
var sum = 0;
for (let i = 0; i < n; i++){
    sum += parseInt(num_arr[i]);
}

console.log(sum);
