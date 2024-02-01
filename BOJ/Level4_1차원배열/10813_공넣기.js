const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var nm = input[0].split(' ');
nm1 = nm.map(Number);

var basket = new Array(parseInt(nm1[0]));

for(let i = 1; i <= nm1[0]; i++){
    basket[i-1] = i;
}

for (let j = 1; j <= nm1[1]; j++){
    num = (input[j].split(' '));
    num1 = num.map(Number);
    var temp = basket[num1[0]-1];
    basket[num1[0]-1] = basket[num1[1]-1];
    basket[num1[1]-1] = temp;
}

for (let k = 0; k < basket.length; k++){
    process.stdout.write(basket[k]+" ");
}
    
