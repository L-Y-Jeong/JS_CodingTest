const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
var arr = input.map(Number);

var max = arr[0];
var res = 1;
for(let i = 1; i < arr.length; i++){
    if(max < arr[i]){
        max = arr[i];
        res = i+1;
    }
}
console.log("%d",max);
console.log("%d",res);
