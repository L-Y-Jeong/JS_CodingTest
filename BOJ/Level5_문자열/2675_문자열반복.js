var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var t = parseInt(input[0]);


for (let i = 1; i <= t; i++){
    var str = input[i].trim().split(' ');
    var arr = [...str[1]];
    var res_len = parseInt(str[0]) * arr.length
    var res = new Array(res_len);
    var cnt = 0;
    for(let j = 0; j < arr.length; j++){
        for (let k = 0; k < parseInt(str[0]); k++){
            res[cnt] = arr[j];
            cnt++;
        }
    }
    console.log(res.join(""));
}
