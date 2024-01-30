const input = require('fs').readFileSync('input.txt').toString().split('\n');

var t = parseInt(input[0]);
var ans ='';

for (let i = 1; i <= t; i++){
    let m = input[i].split(' ');
    let m0 = parseInt(m[0]);
    let m1 = parseInt(m[1]);
    console.log("Case #%d: %d + %d = %d", i, m0, m1, m0+m1);
}
