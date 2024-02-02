var input = require('fs').readFileSync('input.txt').toString().trim().split(' ');
var arr = new Array (2);
for(let i = 0; i < input.length; i++){
    num = [...input[i]];//문자열 분리
    var temp = num[0];
    num[0] = num[2];
    num[2] = temp;

    arr[i] = num.join('');
}
if (arr[0]> arr[1]){
    console.log(arr[0]);
}
else{
    console.log(arr[1]);
}
