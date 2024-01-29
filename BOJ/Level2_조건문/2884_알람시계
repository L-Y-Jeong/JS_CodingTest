const input = require('fs').readFileSync('input.txt').toString().split(' ');

var h = parseInt(input[0]);
var m = parseInt(input[1]);

if (m < 45){
    if (h == 0){
        h = 23;
    }
    else{
        h -= 1;
    }
    
    m = 60 - 45 + m;
}
else {
    m -= 45;
}

console.log('%d %d', h, m);
