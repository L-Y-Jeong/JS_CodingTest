
var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
var n = parseInt(input[0]);

for(let i = n; i > 0; i--){
    for(let j = i-1; j > 0; j--){
        process.stdout.write(" ");
    }
    for(let k = 1; k <= 2 * (n-i) + 1; k++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}

for (let i = 0; i < n-1; i++) {
    for(let j = 0; j <= i; j++) {
        process.stdout.write(" ");
    }
    for (let k = 2 * (n-i) - 3; k > 0; k--) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
