var input = require('fs').readFileSync('input.txt').toString().trim().split(' ');

var alph = new ArrayBuffer(26);
var cnt = 65;
for (let i = 2; i < parseInt(26/3)+2; i++){
    if (((i >= 2)&&(i <= 6))||(i==8)){
        for(let j = 0; j < 3; j++){
            alph[cnt-65] = i+1; //A~Z의 아스키코드에 해당하는 위치의 원소에 걸리는 시간이 들어감.
            cnt++;
        }
    }
    else{
        for(let j = 0; j < 4; j++){
            alph[cnt-65] = i+1;
            cnt++;
        }
    }
    
}

var sum = 0;
for (let k = 0; k < input[0].length; k++){
    sum += alph[input[0].charCodeAt(k)-65];
}

console.log(sum);
