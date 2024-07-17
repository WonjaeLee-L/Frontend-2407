// 1 ~ 10 홀수의 합
let sumOdd = 0;
for (let i = 1; i <= 10; i += 2)
    sumOdd += i;

sumOdd = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0)
        continue;
    sumOdd += i;
}
console.log(sumOdd);

for (let i = 1; i <= 5; i++) {
    let line = '';
    for (let k = 1; k <= 5; k++) {
        // if (k == i)         // 1줄에서 1빼고, 2줄에서 2빼고...
        //     continue;
        line += k + ' ';
        if (k ==i)              //위에 두줄이랑
            break;              //여기 두줄 번갈아가며 주석처리하고 결과 보기
    }
    console.log(line);
}