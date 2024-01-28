/*fs 사용하는 경우*/

//백준 테스트 케이스 경로 : /dev/stdin
var fs = require('fs');
//백준에는 '/dev/stdin' 경로에 테스트 케이스 파일이 있음.
//읽어들인 정보는 toString()함수를 통해 문자열로 변환하여야 사용 가능.
var filePath = 'input.txt';
var input = fs.readFileSync(filePath).toString().split(' ');
//option으로 인코딩을 string 자료형으로 넘기는 경우, toString을 할 필요없이 문자열 반환
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a+b);

/*readline 사용하는 경우*/

// readline 모듈을 import
const readline = require('readline');

// 인터페이스 객체 생성
// process의 입출력 스트림을 input과 output에 할당
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = []

rl.on('line', function(line){
    input = line.split(' ');
    rl.close();
    
}).on('close', function () {
    const result = Number(input[0]) + Number(input[1]);
    console.log(result);

    process.exit();
});

*********************************************************************
백준에 제출하면 정답이라고 뜨는데, 정작 vscode에서 실행하면 SyntaxError가 뜬다. 왜지??
