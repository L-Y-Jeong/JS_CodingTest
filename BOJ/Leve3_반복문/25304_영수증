const input = require('fs').readFileSync('input.txt').toString().split('\n');
var price = 0;
var x = parseInt(input[0]);
var n = parseInt(input[1]);

for(let i = 2; i < n+2; i++){
    let m = input[i].split(' ');
    price = price + (parseInt(m[0]) * parseInt(m[1]));
}

if (x == price){
    console.log("Yes");
}
else{
    console.log("No");
}
