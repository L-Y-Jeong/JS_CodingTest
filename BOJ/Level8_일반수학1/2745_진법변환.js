const input = require('fs').readFileSync('input.txt').toString().trim().split(' ');

var arr = input[0].split('');
var arr_rev = arr.reverse();
var cnt = 1;
var sum = 0;

for (var i = 0; i < input[0].length; i++){
    if (arr_rev[i] >= 'A' && arr_rev[i] <= 'Z'){
        sum += ((arr_rev[i].charCodeAt() - 55) * cnt);
    }
    else{
        sum += arr_rev[i] * cnt;
    }
    cnt *= parseInt(input[1]);
    
}

  console.log(sum);
