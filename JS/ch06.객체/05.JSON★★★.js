// JSON객체 - JavaScript Object Notation
// 이기종 컴퓨터간에 데이터를 주고 받는 표준 - XML(eXtensible Markup Language)
// 실제는 json이 업계 표준(de facto standard)
// 외부로 데이터 보낼때 json의 form으로 문자열을 만들어야 한다. - JSON.stringify
// 외부에서 받으면 JSON.parse로 다시 되돌릴 수 있다.
let name = 'James', age = 27, job = '프로그래머';
let person = {name: name, age: age, job: job};  // 1. 원칙
let newPerson = {name, age, job};               // 2. key 이름과 변수명이 같으면 하나만 사용가능
console.log(person, newPerson);

let externalForm = JSON.stringify(person);
console.log(externalForm);

let internalForm = JSON.parse(externalForm);
console.log(internalForm);

let personArray  = [person, newPerson, {name: 'Maria', age: 25, job: '디자이너'}];
console.log(JSON.stringify(personArray));

// Ajax 검색