
var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
var str = [...input[0]];
var cnt = 1;
for(let i = 0; i < parseInt(str.length/2); i++){
    var n = str.length-i-1;
    if (str[i] != str[n]){
        cnt = 0;
        break;
    }
}

console.log(cnt);
