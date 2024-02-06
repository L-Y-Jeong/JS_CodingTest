const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
var mn = input[0].split(' ');
var mn1 = mn.map(Number);

var arrA = [];
var arrB = [];

for(let i = 1; i < input.length; i++){
    var num = input[i].split(' ');

    num = num.map(Number);

    if (i <= mn1[0]){
        arrA.push(num);
    }
    else{
        arrB.push(num);
    }
}

for (let i = 0; i < mn1[0]; i++){
    for(let j = 0; j < mn1[1]; j++){
        process.stdout.write(arrA[i][j] + arrB[i][j] + ' ');
    }
    process.stdout.write('\n');
}
