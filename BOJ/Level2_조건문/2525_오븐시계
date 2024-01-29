//첫째 줄은 공백으로 나누어 두 개의 숫자 입력. 둘째 줄은 하나의 숫자 입력.
const input = require('fs').readFileSync('input.txt').toString().split('\n');

var h = parseInt(input[0].split(' ')[0]);
var m = parseInt(input[0].split(' ')[1]);

var time = parseInt(input[1]);

var time_h = parseInt(time / 60);
var time_m = time % 60;

if (m + time_m < 60){
    m += time_m;
}
else if (m + time_m >= 60){
    h = h + time_h + 1;
    m = (time_m + m) - 60;
}

if (h >= 24){
    h = h - 24;
}

console.log("%d %d", h, m);
