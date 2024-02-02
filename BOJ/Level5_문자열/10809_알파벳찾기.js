var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var alph = new Array(26); //97 ~ 122 a~z -> 0~25
alph.fill(-1,0,alph.length);

for (let i = 0; i < input[0].length; i++){
    let num = input[0].charCodeAt(i) - 97;
    if ((alph[num] === -1)){
        alph[num] = i;
    } 
}
console.log(alph.join(" "));
