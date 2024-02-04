var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
var n = parseInt(input[0]);
var temp = [];
var cnt = 0;

function isDup(arr){ //중복 문자 확인
    const isdup = arr.some(function(x) {
        return arr.indexOf(x) !== arr.lastIndexOf(x);
    });
    return isdup;
}

for (let i = 1; i <= n; i++){
    var arr = [...input[i]];
    for (let j = 0; j < input[i].length; j++){// 전 순서의 원소와 같으면 배열에 안넣음. 다르면 넣음
        if (arr[j-1] != arr[j]){
            temp[j] = arr[j];       
        }
    }
    if(!isDup(temp)){ //중복 o = true
        cnt++;
    }
    temp = [];
}

console.log(cnt);
