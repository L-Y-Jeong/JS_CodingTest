const input = require('fs').readFileSync('input.txt').toString().trim().split('\n'); //trim을 빼니까 틀렸다고 나옴.
var cnt = 0;
while(1){
    try{ //예외 처리 원하는 코드
        let m = input[cnt].split(' ');
        console.log(parseInt(m[0])+parseInt(m[1]));
        cnt += 1;
    }
    catch{ //예외 발생했을 때 실행할 코드
        break;
    }
}
