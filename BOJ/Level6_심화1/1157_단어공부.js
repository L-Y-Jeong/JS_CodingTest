
var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
var alph = new Array(26);
alph.fill(0);

for(let i = 0; i < input[0].length; i++){
    if ((input[0].charCodeAt(i) >= 97)&&(input[0].charCodeAt(i) <= 122)){
        let n = (input[0].charCodeAt(i)-32)-65 //소문자->대문자
        alph[n] += 1; 
    }
    else{
        let n = input[0].charCodeAt(i)-65;
        alph[n] += 1;
    }
}

var max = alph[0];
var cnt = 0;
var temp = 0;
for (var j = 1; j < alph.length; j++){
    if(max < alph[j]){
        max = alph[j];
        temp = j;
        cnt = 0;
    }
    if ((max == alph[j])&&(temp != j)){
        cnt++;
    }
}

if (cnt > 0){
    console.log("?");
}
else{
    console.log(String.fromCharCode(temp+65));
}
