var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var n = parseInt(input[0]);

var score = input[1].split(' ');
score = score.map(Number);

var max = score[0];
for (let i = 1; i < n; i++){
    if (max < score[i]){
        max = score[i];
    }
}

var new_score = new Array(n);
var sum = 0 ;
for (let j = 0; j < n; j++){
    new_score[j] = (score[j]/max)*100;
    sum += new_score[j]; 
}
var mean = sum / (n);
console.log(mean);
