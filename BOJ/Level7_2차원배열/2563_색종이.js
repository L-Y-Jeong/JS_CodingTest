// 1. 100*100 2차원 배열을 만들고 0으로 초기화한다.
// 2. 색종이 위치면 1을 대입한다.
// 3. 값이 1이면 cnt++한다.
const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var n = parseInt(input[0]);
var cnt = 0;
var arr = Array.from(new Array(100), () => new Array(100).fill(0));


for (var i = 1; i <= n; i++){
    var len = input[i].split(' ');
    var col = parseInt(len[0]);
    var row = parseInt(len[1]);
    for (var j = 0; j < 10; j++){
        for (var k = 0; k < 10; k++){
            arr[row+j][col+k] = 1;
        }
    }
}

for (var m = 0; m < 100; m++){
    for(var n = 0; n < 100; n++){
        if (arr[m][n] == 1 ){
            cnt++;
        }
    }
}

console.log(cnt);
