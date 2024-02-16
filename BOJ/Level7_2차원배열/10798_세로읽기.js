const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var arr = [];
var max = 0;

for (let i = 0; i < 5; i++){
    var str = [...input[i].trim()];
    if(max < input[i].length){
        max = input[i].length;}
    arr.push(str);
}


for (let j = 0; j < max; j++){
    //console.log(input[j].length);
    for(let k = 0; k < 5; k++){
        if (arr[k][j] == null){
            continue;
        }
        process.stdout.write(arr[k][j]);
    }
}
