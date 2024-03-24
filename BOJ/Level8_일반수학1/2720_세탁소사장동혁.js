// 쿼터 0.25, 다임 0.10, 니켈 0.05, 페니 0.01

const input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

for (var i = 1; i <= input[0]; i++){
    var quar = 0;
    var dime = 0;
    var nick = 0;
    var penn = 0;
    var res = 0;
    quar = Math.floor(input[i]/25);
    res = input[i]%25;
    dime = Math.floor(res / 10);
    res = res % 10
    nick = Math.floor((res) / 5);
    res = res % 5
    penn = Math.floor((res) / 1);

    console.log(`${quar} ${dime} ${nick} ${penn}`);

}
