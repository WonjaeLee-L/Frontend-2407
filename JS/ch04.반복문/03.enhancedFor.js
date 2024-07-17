// Enhanced for 반복문

let summerFruits = ['수박', '참외', '복숭아', '포도'];
// for (let i = 0; i < summerFruits.length; i++){
//     console.log(i, summerFruits[i]);
// }

// for (let i in summerFruits) {
//     console.log(i, summerFruits[i]);
// }

// 배열의 모든 요소에 대해 출력을 하라!는 의미
for (let fruit of summerFruits) {
    console.log(fruit);
}

// 여름 과일들을 하나의 문자열로 만들기('') 더하기 할때에는 0이었음
let favoriteFruits = '';