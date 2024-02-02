var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var n = parseInt(input[0]);

for (let i = 1; i <= n; i++){
    var str = input[i].trim();
    var arr = [...str];
    console.log("%s%s", arr[0], arr[arr.length-1]);
}
