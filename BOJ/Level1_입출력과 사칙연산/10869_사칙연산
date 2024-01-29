var fs = require('fs');
//백준에는 '/dev/stdin' 경로에 테스트 케이스 파일이 있음.
//읽어들인 정보는 toString()함수를 통해 문자열로 변환하여야 사용 가능.
var filePath = 'input.txt';
var input = fs.readFileSync(filePath).toString().split(' ');
//option으로 인코딩을 string 자료형으로 넘기는 경우, toString을 할 필요없이 문자열 반환
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log("%d\n%d\n%d\n%d\n%d", a+b, a-b, a*b, parseInt(a/b), a%b);

/*js는 나누기를 하면 실수가 나오므로, parseInt()를 써줘야함.! */
