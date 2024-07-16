// 주사위 3개 - 백준도장 2480
let dice1 = Math.ceil(Math.random() * 6);
let dice2 = Math.ceil(Math.random() * 6);
let dice3 = Math.ceil(Math.random() * 6);
let prize = '';

if(dice1 == dice2 && dice2 == dice3)     // dice1 == dice2 == dice3 처럼 하지말고 두개씩 끊어서 한다.
prize = 10000 + dice1 * 1000;            // 파이썬과 자바스크립트에서는 가능함. 그래도 모든거에 통용하려면 끊어서
else if(dice1 == dice2 && dice2 !== dice3)  // 여기서는 dice2 !== dice3은 빼도 됨.
    prize = 1000 + dice1 * 100;
else if(dice2 == dice3 && dice2 !== dice1)  // 여기서도 dice2 !== dice1은 빼도 됨.
    prize = 1000 + dice2 * 100;
else if(dice1 == dice3 && dice3 !== dice2)  // 여기서도 dice3 !== dice2는 빼도 됨.
    prize = 1000 + dice1 * 100;
else {
    let maxDice = dice1 > dice2 ? dice1 : dice2;
    maxDice = maxDice > dice3 ? maxDice : dice3;
    prize = maxDice * 100;
}



/*      위에 else 뒤에 부분과 같은 내용이나 복잡함.
else if(dice1 > dice2 && dice2 >= dice3)
    prize = dice1 * 100;
else if(dice1 > dice3 && dice3 >= dice2)
    prize = dice1 * 100;
else if(dice2 > dice1 && dice1 >= dice3)
    prize = dice2 * 100;
else if(dice2 > dice3 && dice3 >= dice1)
    prize = dice2 * 100;
else if(dice3 > dice2 && dice2 >= dice1)
    prize = dice3 * 100;
else if(dice3 > dice1 && dice1 >= dice2)
    prize = dice3 * 100;
*/

console.log(`첫번째 주사위는 ${dice1}, 두번째 주사위는 ${dice2}, 세번째 주사위는 ${dice3}이며,
    상금은 '==>' ${prize}원 입니다.`);



// '='  대입 연산자 : 변수를 선언하고 값을 할당
// '==' 동등 연산자 : 두 값이 같은지 비교할 때 사용 비교할 때 자동으로 타입 변환



// Refactoring
if(dice1 == dice2 && dice2 == dice3)   
    prize = 10000 + dice1 * 1000;          
else if(dice1 == dice2 || dice1 == dice3) 
    prize = 1000 + dice1 * 100;
else if(dice2 == dice3)
    prize = 1000 + dice2 * 100;
else {
    let maxDice = Math.max(dice1, dice2, dice3);     
    prize = maxDice * 100;
}// max함수는 괄호 안에 중에 최댓값을 골라줌.

console.log(`첫번째 주사위는 ${dice1}, 두번째 주사위는 ${dice2}, 세번째 주사위는 ${dice3}이며,
    상금은 '==>' ${prize}원 입니다.`);