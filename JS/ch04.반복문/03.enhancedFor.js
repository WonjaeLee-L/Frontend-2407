// Enhanced for 반복문

let summerFruits = ['수박', '참외', '복숭아', '포도'];
// for (let i = 0; i < summerFruits.length; i++){
//     console.log(i, summerFruits[i]);
// }

// for (let i in summerFruits) {
//     console.log(i, summerFruits[i]);
// }                                            object에서 in 사용

// 배열의 모든 요소에 대해 출력을 하라!는 의미  array에서 of 사용
for (let fruit of summerFruits) {
    console.log(fruit);
}

// 여름 과일들을 하나의 문자열로 만들기('') 더하기 할때에는 0이었음
// if문과 마찬가지로 for아래에 한문장이면 {}를 열 필요 없음
let favoriteFruits = '';    // 문자열일 경우 ''
for (let fruit of summerFruits)
    favoriteFruits += fruit + ' ';
console.log(favoriteFruits);

// 1에서 10까지 곱한 값(10factorial)
let product = 1;        // 곱일 경우에 1
for (let i = 1; i <= 10; i++)
    product *= i;
console.log(product);

// 1에서 30까지 3의 배수의 배열 만들기 [3, 6, 9, ..., 30]
let multiple3 = [] ;    // 배열일 경우 []
for (let i = 3; i <= 30; i += 3)
    multiple3.push(i);
console.log(multiple3);