/*
 * 객체 (object)
 */

// 1. 자료구조의 의미 - 파이썬의 딕셔너리, 자바의 맵과 유사한 개념
//          키, 밸류의 조합
let personArray = ['James', 27, '남자', '프로그래머', 175.2];
let personObject = { name: 'James', age: 27, 
                gender: '남자', job: '프로그래머', height: 175.2};

// 2. 객체 본연의 의미 - 속성(attribute, 형용사)과 메소드(method, 동사)로 사물을 묘사
const pet = {
    name: '구름',
    eat: function(food = '사료') {
        console.log(`${food} 을/를 먹습니다.`);
    }
}

console.log(pet.name);
pet.eat();
pet.eat('간식');        // 값을 안주면 위에처럼 기본값인 사료이고 값을 주면 준게 나옴

// 객체 속성에 대한 접근 personObject. 하면 위에서 내가 정의한 속성들이 쭉 나온다.
console.log(personObject.job);          // 이렇게 사용하는 것이 일반적
console.log(personObject['job']);       // 이런식으로는 사용하지 않는다.
let key = 'job';    //어떤 값을 문자열로 받았을때
console.log(personObject[key]);         // key 값을 변수로 사용하는 경우는 이렇게 쓴다.(.key는 불가)

// 배열은 객체의 특수한 형태
console.log(typeof personArray);
let fruitArray = ['감', '밤', '배'];             //아래같은 object(객체)를 줄인 형태가 array(배열)
let fruitObject = {0: '감', 1: '밤', 2: '배'};
