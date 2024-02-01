const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var nm = input[0].split(' ');
var nm1 = nm.map(Number);


var basket = new Array(parseInt(nm1[0]));
basket.fill(0, 0, basket.length); //모든 원소 0으로 초기화

for(let i = 1; i <= nm1[1]; i++){
    let num = input[i].split(' ');
    var num1 = num.map(Number);
    for (let j = num1[0]-1; j <= num1[1]-1; j++){
        basket[j] = num1[2];
    }
}
for(let k = 0; k < basket.length; k++){
    process.stdout.write(basket[k]+" ");
}
