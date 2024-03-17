function CharCode(x){
    var num = 0;
    if ((x >= 10) && (x <= 35)){
        num = String.fromCharCode(x + 55);
        return num;
    }
    else{
        num = x;
        return num;
    }
}


const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
var cnt = 0;
var arr = [];
var num = parseInt(input[0]);
while(true){
    arr[cnt] = CharCode(num % parseInt(input[1]));
    num = Math.floor(num / parseInt(input[1]));
    cnt++;

    if (num === 0){ 
        break;
    }
}

var res = (arr.reverse()).join('');
console.log(res);

