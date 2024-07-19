// String 객체(문자열 다루기)

let hello = '안녕하세요?';

// 속성
console.log(hello.length);

// 메소드(method)
console.log(hello[2], hello.charAt(2));     // '하', 두개 같은 표현 방법
console.log(hello + '여러분!', hello.concat('여러분!'));

// 문자열에 특정 문자열이 있는지 없는지 확인할 때, 사용한다. 음수가 나오면 없음.
console.log(hello.indexOf('세요'), hello.indexOf('가'));      // 어떤 글자가 index값이 몇번이냐 3, -1
console.log(hello.includes('세요'));
console.log('pineapple'.lastIndexOf('p'));                      // 6

// 문자열을 분리하여 배열을 생성
let fruits = '수박,참외,포도';
let fruitArray = fruits.split(',');
console.log(fruitArray);                // [ '수박', '참외', '포도' ]

// 문자열 일부분(substring)
let today = new Date().toISOString();   //2024-07-19T02:12:32.254Z
console.log(today);
// 날짜 추출 - 2024-07-19
console.log(today.substring(0, 10)); //substring(시작index, 끝index) 시작 숫자(0)는 포함, 끝 숫자(10)는 포함x 
// 시간 추출 - 02:12:21
console.log(today.substring(11, 19));   // 11에서 출발해서 8글자를 읽음(11+8)
// 우리나라 시간 표시
console.log(new Date().toLocaleString()); //2024. 7. 19. 오전 11:20:28
console.log(new Date().toLocaleString().substring(16));     // substring 끝 글자 안쓰면 맨끝까지

// 공백 제거
let space = '\t   Hello?    \r\n';
console.log(space);
console.log(space.trim());      //양쪽의 White space(공백, 탭, \r, \n) 제거

// Method chaining
console.log(space.trim().substring(0,5).toUpperCase());     // 공백 지우고, hello만 끄집어내서 대문자로 변환

// 문자열 변환
let sample = 'A quick brown fox';
console.log(sample.replace('A', 'The'));
console.log(sample.replace('o', 'O'));      // 앞에꺼 하나만 바꿈

// 정규표현식(Regular Expression) - 정규표현식 검색해서 그대로 쓰면 됨(외울것 x)
sample = 'A quick brown fox - 3 - 갈색의 재빠른 여우 the lazy dog = 5 = 게으른 개';
// 영문자와 공백만 남기고 모두 지움 [^제외대상]
console.log(sample.replace(/[^A-Z a-z]/g, ''));
// 한글과 공백만 남기고 모두 지움
console.log(sample.replace(/[^가-힣ㄱ-ㅎ ㅏ-ㅣ]/g, ''));
// 숫자, 특수기호만 남기고 모두 지움
console.log(sample.replace(/[^0-9-=]/g, ''));