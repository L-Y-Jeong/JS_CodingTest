
var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
var score = 0;
var sum = 0;
for (let i = 0; i < input.length; i++){
    var grade = input[i].trim().split(" ");
    switch (grade[2]){
        case "A+" : score += 4.5 * parseFloat(grade[1]);
        break;
        case "A0" : score += 4.0 * parseFloat(grade[1]);
        break;
        case "B+" : score += 3.5 * parseFloat(grade[1]);
        break;
        case "B0" : score += 3.0 * parseFloat(grade[1]);
        break;
        case "C+" : score += 2.5 * parseFloat(grade[1]);
        break;
        case "C0" : score += 2.0 * parseFloat(grade[1]);
        break;
        case "D+" : score += 1.5 * parseFloat(grade[1]);
        break;
        case "D0" : score += 1.0 * parseFloat(grade[1]);
        break;
        case "F" : score += 0.0 * parseFloat(grade[1]);
        break;
    }
    
    if (grade[2] == "P"){
        continue;
    }
    sum += parseFloat(grade[1]);
}

var total = score / sum;

console.log(total);

//아래는 틀린 코드..근데 왜 틀렸는지 알 수가 읎네

const input = require("fs").readFileSync('input.txt').toString().trim().split("\n").map(x => x.split(" "));
const scoreArr = {
    "A+": 4.5, "A0": 4.0,
    "B+": 3.5, "B0": 3.0,
    "C+": 2.5, "C0": 2.0,
    "D+": 1.5, "D0": 1.0,
    "F": 0.0
}
var total = 0;
var sum = 0;
for (let [sub, score, grade] of input){
    if (grade == 'P'){
        continue;
    }
    sum += parseInt(score)*parseInt(scoreArr[grade]);
    

    total += parseInt(score);
}
console.log(sum/total);
