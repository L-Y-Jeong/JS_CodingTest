var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var nm = input[0].split(' ');
var nm1 = nm.map(Number);
var basket = new Array(nm1[0]);

for (let i = 0; i < nm1[0]; i++){
    basket[i] = i+1;
}

for (let j = 1; j <= nm1[1]; j++){
    var range = input[j].split(' ');
    var ran = range.map(Number);
    let p = 0;
    let q = 0;
    while (p <= parseInt((ran[1]-ran[0])/2)){
        let temp = basket[(ran[0] + p)-1];
        basket[(ran[0] + p)-1] = basket[(ran[1] - q)-1];
        basket[(ran[1] - q)-1] = temp;
        p++;
        q++;
    }
}

for (let i = 0; i < basket.length; i++){
    process.stdout.write(basket[i]+" ");
}
