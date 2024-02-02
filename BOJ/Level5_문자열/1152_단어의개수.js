var input = require('fs').readFileSync('input.txt').toString().trim();

if (input.length === 0){
    console.log(0);
}
else{
    var word = input.split(' ');
    console.log(word.length);
}
