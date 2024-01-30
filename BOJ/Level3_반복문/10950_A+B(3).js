const input = require('fs').readFileSync('input.txt').toString().split('\n');

var n = parseInt(input[0]);

for (var i = 1; i <= n; i++){
    let m = input[i].split(' ');
    console.log(parseInt(m[0]) + parseInt(m[1]));
}
