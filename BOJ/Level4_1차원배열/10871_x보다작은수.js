const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var fir = input[0].split(' ');
var arr = input[1].split(' ');

var cnt = arr.filter((value) => value < parseInt(fir[1]));

for(let i = 0; i < cnt.length; i++){
    process.stdout.write(cnt[i]+" ");
}
