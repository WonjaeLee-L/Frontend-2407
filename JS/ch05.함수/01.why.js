// 소수(prime number) 판별
let num = 13;
// for (let i = 2; i < num; i++) {
//     if(num % i == 0) {
//         console.log(`${num} 은/는 소수가 아님.`);
//         break;
//     }
// }

// isPrimeNumber라는 함수명. 거기에 (num)이라는 값(매개변수, 파라미터)을 전달해줌. 이걸바꿔가며 호출
// for밑에는 이 문제를 이렇게 풀어낸다.
// 약수가 있으면 false( = 소수가 아니다. )
function isPrimeNumber(num) {
    let sqrtNum = Math.floor(Math.sqrt(num));
    
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i == 0)
            return false;
    }

    // for (let i = 2; i < num; i++) {
    //     if (num % i == 0)
    //         ruturn false;
    // }                    위에 블록 대신 이거로 써도 됨
    return true;
}

console.log(12, isPrimeNumber(12));
console.log(13, isPrimeNumber(13));

// 2에서 부터 20 까지의 소수
let primeNumbers = [];
// if() = 소수면, 나는 primeNumbers라고하는데에 넣을거다 그 값을
for (let i = 2; i <= 100; i++) {
    if (isPrimeNumber(i))
        primeNumbers.push(i);
}
console.log(primeNumbers);