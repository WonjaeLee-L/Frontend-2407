// 표준 내장 객체 - Number
let num = 273;
let numberFromConstructor = new Number(273);        //위의 방식을 이처럼 표현 가능(객체로부터 숫자를 가져옴)
console.log(num, numberFromConstructor);

const pi = Math.PI;
console.log(pi);                // 3.141592653589793
console.log(pi.toFixed(6));     // ***toFixed(소수점 몇째자리까지 보여줄지) 3.141593(반올림)
console.log((1000*pi).toExponential()); // 뒤에를 10+n으로 표현 3.141592653589793e+3
console.log(pi.toPrecision(3));     // ***유효자리숫자 설정 3.14

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);       // 2의 53승의 마이너스 1
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);        // - infinity, infinity

// NaN (Not a Number)
let a = parseInt('string');
console.log(Number.isNaN(a));

console.log(Number.isFinite(9007199254740991), Number.isFinite(Infinity));     //유효한 숫자인지 확인
