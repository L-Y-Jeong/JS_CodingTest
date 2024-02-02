var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var str = input[0].trim();
var num = parseInt(input[1]);
var arr = Array.from(str); //문자열 분리 및 배열 변환
//or arr = [...str]

console.log(arr[num-1]);
