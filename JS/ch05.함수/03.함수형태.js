/*
 * 함수 형태
 */
// 1. 매개변수(인수)와 반환값이 있는 함수. a, b가 매개변수. a + b가 반환값
function add(a, b) {
    return a + b;    
}

// 2. 매개변수 없이 반환값만 있는 함수(생산자, producer)
function dice() {
    return Math.ceil(Math.random() * 6);
}
console.log(dice());

// 3. 매개변수만 있고 반환값이 없는 함수(소비자, consumer)
function print(a) {
    console.log(a);
}
print('반환값이 없는 함수');

// 4. 매개변수도 없고 반환값도 없는 함수
var globalVar = 0; //전역변수를 하나 만들고
function increment() {
    globalVar++;    
}
increment();
console.log(globalVar); // 넣은 것, 반환값이 없지만 뭔가 역할을 했음(globalVar값 변함)
