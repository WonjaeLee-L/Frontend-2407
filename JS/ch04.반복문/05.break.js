// break - 반복문 탈출

// 04.while.js에 있는 방법보다 아래 방법이 더 많이 쓰임
let sumDice = 0;
let diceArray = [];
//for (;;) 와 while (true)는 동일하다.
while (true) {
    let dice = Math.ceil(Math.random() * 6);
    diceArray.push(dice);
    sumDice += dice;
    if (sumDice > 21)
        break;
}
console.log(diceArray);
console.log(sumDice);

// break는 loop의 한단계만 벗어날 수 있음. point A에서 끝나고 B로 못감. break는 블록 하나만 벗어남.
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 5; k++) {
        if (k == i)
            break;
    }
    console.log('point A', i);
}
console.log('point B');