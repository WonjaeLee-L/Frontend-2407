// 중첩(nested) for 반복문

// 1. 별 다섯개를 여섯줄 그리기 (세로줄단위는 i 바깥쪽 for / 안쪽가로방향은 k이고 안쪽 for)
for (let i = 0; i < 6; i++) {
    let line = '';
    for (let k = 0; k < 5; k++) {
        line += '* ';
        }
    console.log(line);
}

// for (let i = 0; i < 6; i++) {
    
//     for (let k = 0; k < 5; k++) {
//         console.log('* ');
//     }
// }                        그냥 이렇게 하면 line이 안생겨서 그냥 별 30개 됨


// i = 0
//          k = 0, 1, 2, 3, 4, 5
// i = 1
//          k = 0, 1, 2, 3, 4, 5
// ...


// 2. 디지털 시계를 매 10분마다 표시하기 
//for 중첩에서 이 시계처럼, 안에(분)다 돌아가면 밖에(시) 하나 늘어나고, 다음 분 다시 돌아감. 반복
for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 59; minute++) {
            if(minute % 10 == 0)
                console.log(`${hour}:${minute}`);
    }
}

// 3. 별을 대각선 모양으로 그리기 (다이아몬드 1사분면)

//             i       k
// *           0       1       for (let k = 0; k < 1; k++)
// **          1       2       for (let k = 0; k < 2; k++)
// ***         2       3
// ****        3       4
// *****       4       5       for (let k = 0; k < 2; k++)


for (let i = 0; i < 5; i++) {
    let line = '';
    for (let k = 0; k < i + 1; k++)
        line += '* '
    console.log(line);
}


// 4. 다이아몬드 4사분면

//             i      k
// * * * * *   5      5            for (let k = 0; k < i; K++)
// * * * *     4      4            for (let i = 5; i >= 1; i--)
// * * *       3      3
// * *         2      2
// *           1      1

for (let i = 5; i > 0; i--) {
    let line = '';
    for (let k = 0; k < i; k++)
        line += '* ';
    console.log(line);
}

// 5. 주사위 눈으로 6 x 6 배열 만들기
// let diceArray = [
//     [1,3,4,6,2,4],[2,3,6,1,1,4],
//     [1,3,2,6,2,4],
//     [2,3,6,1,1,3],
//     [4,3,4,6,2,4],
//     [2,3,5,1,1,4]
// ]
// console.log(diceArray);

let diceArray = [];
for (let i  = 0; i < 6; i++) {
    let line = [];
    for (let k = 0; k < 6; k++) {
        line.push(Math.ceil(Math.random()*6));
    }
    diceArray.push(line);
}
console.log(diceArray);

// 6. 구구단

for (let i = 2; i < 10; i++) {
    let line = [];
    for (let k = 1; k < 10; k++) {
        line.push(i*k);
    }
    console.log(line);
}
