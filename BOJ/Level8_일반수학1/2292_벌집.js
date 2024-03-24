const input = require('fs').readFileSync('input.txt').toString().trim();

var pass = 0;
var n = 0;

for(var i = 1; i < parseInt(input); i += n * 6){
        pass++;
        n++;  
}

console.log(pass+1);
