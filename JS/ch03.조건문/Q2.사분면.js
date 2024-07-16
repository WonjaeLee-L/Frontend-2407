// 사분면 고르기 - 백준도장 146811
let x = Math.ceil(Math.random() * 20);
let y = Math.ceil(Math.random() * 20);

x *= Math.random() > 0.5 ? 1 : -1;          // a *=b; 는 a = a * b;와 같다. 현재 a의 값에 b를 곱한 결과를
y *= Math.random() > 0.5 ? 1 : -1;          // 다시 a에 저장한다.

let qd = '';
if (x > 0 && y > 0)
    qd = 1;     // qd = '1사분면'; 이라고 해도 됨
else if (x > 0 && y < 0)
    qd = 4;
else if (x < 0 && y > 0)
    qd = 2;
else if (x < 0 && y < 0)
    qd = 3;
else
    qd = '좌표축';

console.log(x, y);
console.log(`${qd}사분면`);


// 정수가 아닌경우에
// x == 2.3    이런식으로 쓰지말고
// Math.abs(x-2.3) < 1e-8  이렇게 사용