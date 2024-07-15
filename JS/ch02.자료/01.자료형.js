/*
 * 자바스크립트의 자료형
 */

// 1. 문자열(String)
console.log("He said 'I love you.'");
console.log('He said "I love you."');
console.log("I'll be back.");

// 특수 문자 - 백슬래시(\) + 문자
console.log("\tabc\tdef\"ghi\njkl\\");

// 문자열 연산자(+)
console.log('가나다' + ' ' + '라마바');

// 문자열 선택
let hello = `안녕하세요?`;  // `랑 "랑 '다 써도됨
console.log(hello, hello[0], hello[3]); // '안녕하세요? 안 세'로 찍힌다.

// 문자열 길이
// 문자열: 속성(attribute), method을 갖게 된다.
console.log(hello.length, hello.charAt(0), hello.charAt(3)); // charAt(숫자) = [숫자]

// template literal
console.log(hello + '문자열의 길이는' + hello.length + '입니다.');
console.log(`${hello} 문자열의 길이는 ${hello.length} 입니다.`);    // 이게 template literal

// 2. 숫자 (Number)
// 자바스크립트에서는 정수형(integer), 실수형(floating point)을 구분하지 않는다.
let a = 3, b = 4;
console.log(a + b, a - b, a * b, a / b, b % a);     // %는 나머지를 의미. b를 a으로 나눈 나머지 값
let pi = 0.3141592e1;   // 0.3141592 x 10 ** 1
let f = 1.3e-8;         // 1.3 x 10 ** -8
console.log(pi, f);