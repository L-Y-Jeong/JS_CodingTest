var input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

var n = input.map(Number);

var arr = new Array(42);
arr.fill(43,0,arr.length); //43으로 모두 초기화(나머지가 43 이상 나올 일이 없으므로.)

for (let i = 0; i < n.length; i++){
    arr[(n[i] % 42)] -= 1; //42로 나눈 나머지 값 위치의 숫자를 1 감소시키기.
}
const cnt = arr.filter((value) => value < 43).length; //서로 다른 나머지의 개수를 구할 수 있음.
console.log(cnt);
