// 매개변수값을 입력하지 않고 호출하는 경우
function printFruit(name, count) {
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}

printFruit('참외', 5);
printFruit('복숭아');

// undefined를 0으로 하는 방법 1
function printFruit2(name, count) {
    if (typeof count == 'undefined')
        count = 0;
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit2('복숭아');
printFruit('복숭아', 3);

// undefined를 0으로 하는 방법 2
function printFruit3(name, count) {
    count = count ? count : 0
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit3('복숭아');
printFruit('복숭아', 3);

/* boolean 값이 false가 되는 경우
 * 0, 0.0, '', undefined
 */

// default 값 지정하기 - 매개변수값을 지정하지 않으면 default값이 나오도록 defauolt값을 설정
// 아래는 count값을 써주면 그 값이 나오고 안써주면 0이 되는 것.
function printFruit4(num, count = 0) {
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit3('복숭아');
printFruit('복숭아', 3);
