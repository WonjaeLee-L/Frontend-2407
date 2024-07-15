/*
 * 상수(Constant)와 변수(Variable)
 */

// 상수
const PI = 3.14159;
let radius = 10;
console.log(`반지름이 ${radius}인 원의 둘레는 ${2 * PI * radius}, 면적은 ${PI * radius **2}입니다.`);

// const PI = 3.1415926535; (한번 선언해서 다시 불가능)
// PI = 3.1415926535;   (상수에 값을 할당하면 에러 발생)

// 변수 - 전역변수(var), 로컬변수(let)으로 사용
radius = 5;     // 변수는 프로그램 내에서 얼마든지 값을 새롭게 바꿀 수 있다.
// let radius = 3;      (let은 한 번 나왔기 때문에 다시 불가능 하다.)


function area() {
    let radius = 5;
    return PI * radius ** 2;

    // 이 안에서만 적용되게는 변수를 다시 선언 가능하다.
}

// 복합 대입 연산자
let a = 0, str = '';
a += 1; a += 2; a += 3;     // a <- a + 1;
console.log(a);
str += 'A quick brown fox ';    // str <- str + 'A quick brown fox'
str += 'jumps over the lazy dog.';
console.log(str);

// 증감 연산자
let x = 0, y = 0;
console.log(x++, ++y);      // post-increment(조회 후, 1 증가), pre-increment(조회 전, 1 증가)
console.log(x, y);
console.log(x--, --y);      // post-decrement, pre-decrement
console.log(x, y);

// 4. undefined 자료형
let c;
console.log(typeof(abc), typeof(c));    // 값이 초기화 되지 않은 변수, 선언하지 않은 변수는 undefined로 출력

// 자료형 변환(강제)
console.log(Number('123'), parseInt('123'), typeof Number('123'));
console.log(String(123), typeof String(123));
console.log(Boolean(1), typeof(Boolean(1)));
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined));     // 이 경우만 false, 나머지는 true
                                                    // 0, 실수, 빈칸, 선언하지 않은 값은 false [],{}는 제외

// 자동 자료 변환
console.log("ABC" + 100 + true);   // 100이 자동으로 100이라는 문자로, Boolean이 자동으로 true라는 문자로 변환
console.log(100 + true);    // true는 1로, false는 0로  // 가장 자료를 많이 표현할 수 있는 것으로 자동 변환
// 표현범위가 작은 것이 큰 것으로 자동 변환됨.
console.log(typeof !!x);    // 논리부정연산자(!)를 두 번 사용하여 불 자료형으로 변환 Boolean() 대신 사용

// 인치를 센치로 변환
let inch = '32';
console.log(2.54 * Number(inch));