// for 반복문

let summerFruits = ['수박', '참외', '복숭아', '포도'];

//for (let i = 0; i <= 3; i++){
//    console.log(i, summerFruits[i]);
//}
//for (let i = 0; i < 4; i++){
//    console.log(i, summerFruits[i]);
//}
for (let i = 0; i < summerFruits.length; i++){
    console.log(i, summerFruits[i]);
}
// 0인 i값으로 한번돌고 (0, 수박), 다시 하나 증가시켜서 1인 i 값으로 돌고(1, 참외), 를 i가 3까지 반복.
// i < 4로 해도 마찬가지 효과, 4대신 summerFruits.length로 해도 됨(이게 가장 좋음).
// (초기값, 초건, 실행할 일)

// 1에서 100사이의 정수의 합 구하기
let sum100 = 0;
for (let i = 1; i <= 100; i++) {
    sum100 += i;
}
console.log(`1에서 100사이의 정수의 합 = ${sum100}`);

// 1에서 100사이의 홀수의 합 구하기
// let sumOdd = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 1)
//         sumOdd += i;
// }

// 1에서 100사이의 홀수의 합 구하기
let sumOdd = 0;
for (let i = 1; i < 100; i += 2) {
    sumOdd += i;
}
console.log(`1에서 100사이의 홀수의 합 = ${sumOdd}`);

// 1에서 100사이의 짝수의 합 구하기
let sumEven = 0;
for (let i = 2; i <= 100; i += 2) {
    sumEven += i;
}
console.log(`1에서 100사이의 짝수의 합 = ${sumEven}`);

// 1에서 100사이의 3의 배수의 합 구하기
let sumtmulti = 0;
for (let i = 3; i <= 100; i += 3) {
    sumtmulti += i;
}
console.log(`1에서 100사이의 3의 배수의 합 = ${sumtmulti}`);

// 200에서 100사이의 5의 배수의 합
let sum5 = 0;
for (let i = 200; i >=100; i -= 5) {
    sum5 += i;
}
console.log(`200에서 100사이의 5의 배수의 합 = ${sum5}`);


// 중첩 for문
// 하루는 몇분이냐?
// 00:00 00:01 ... 00:59
// 01:00 01:02 ... 01:59 로 돌아감
let sumMinute = 0;
for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
        sumMinute++;
    }
}
console.log(sumMinute);
