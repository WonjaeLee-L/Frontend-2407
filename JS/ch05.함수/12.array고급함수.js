// 배열에 대한 고급 함수

// forEach (일단 이거 기본으로 알기)
let fruits = '수박,참외,복숭아,토마토,포도'.split(',');  
for (let fruit of fruits)
    console.log(fruit);

// console.log(fruits);  //문자열을 split method로 (,로 split해서 array만들어줘) (위에 두줄제외시)
fruits.forEach((fruit, index) => {
    console.log(`인덱스: ${index}, 아이템: ${fruit}`);
});
// map과 forEach 둘 다 array element 각각에 대해 작업하고자 할 때, 사용 // map함수는 react에서 자주 씀
let numbers = [11, 23, 56, 72, 83];
numbers.map((num) => {
    console.log(`${num}, ${num * num}`);
});

// 과일의 글자수가 3인 과일만 선택
let newFruits = fruits.filter((fruit) => fruit.length == 3);
console.log(newFruits);