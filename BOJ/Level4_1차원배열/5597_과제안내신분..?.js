var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var num = new Array(30);

num.fill(0, 0, num.length);
var input1 = input.map(Number);

for (let i = 0; i < num.length; i++){
    num[input1[i]-1] = input1[i];
}

for (let k = 0; k < num.length; k++){
    if (num[k] == 0){
        console.log(k+1)
    }
}
