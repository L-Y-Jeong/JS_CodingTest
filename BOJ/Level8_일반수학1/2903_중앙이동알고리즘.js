const input = require('fs').readFileSync('input.txt').toString().trim();
var cnt = 2;

for (var i = 0; i < parseInt(input); i++){
    cnt = cnt * 2 - 1;
}

console.log(cnt*cnt);

