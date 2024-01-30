const input = require('fs').readFileSync('input.txt').toString().split('\n');

var n = parseInt(input[0]);

for(let i = 1; i <= n; i++){
    console.log(`${"*".repeat(i)}`);
}
