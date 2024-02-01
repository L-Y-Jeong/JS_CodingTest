const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var n = parseInt(input[0]);
var cnt = 0;
var m = input[1].split(' ');
var v = parseInt(input[2]);

for (let j = 0; j < n; j++){
    if (parseInt(m[j]) == v){
        cnt++;
    }
}

console.log(cnt);


//다른 방법
const [n, num_arr, v] = input;
const cnt = num_arr.split(' ').filter((value) => value == v).length; //v와 같은 숫자들을 뽑아 배열로 만든 뒤, 배열 길이를 알아냄.
console.log(cnt);
