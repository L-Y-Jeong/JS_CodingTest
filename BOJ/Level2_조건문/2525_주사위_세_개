const input = require('fs').readFileSync('input.txt').toString().split(' ');

var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

var money = 0;
if ((a==b)&&(b==c)){
    money = 10000 + (a * 1000);
}
else if ((a==b)||(b==c)||(a==c)){
    if ((a==b)||(a==c)){
        money = 1000 + (a * 100);
    }
    else{
        money = 1000 + (b * 100);
    }
}
else{ //var maxNum = Math.max(...input); 사용 가능.
    if (a > b){
        if (a > c){
            money = a * 100;
        }
        else{
            money = c * 100;
        }
    }
    if (a < b){
        if (b > c){
            money = b * 100;
        }
        else{
            money = c * 100;
        }
    }
}
//
console.log(money);
