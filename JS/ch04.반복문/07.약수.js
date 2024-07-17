// 약수 구하기

let num = 12;
let divisors = [];
for (let i = 1; i <= num; i++) {
    if (num % i == 0)
        divisors.push(i);
}
console.log(divisors);

// let num1 = 12;
// for (let i = 1; i <= 12; i++) {
//     let array = [];
//     if (num1 % i != 0)
//         continue;
//     array.push(i)
//     console.log(array);

// }



// 소수(prime number) 판별
for (let i = 2; i < num; i++) {
    if(num % i == 0) {
        console.log(`${num} 은/는 소수가 아님.`);
        break;
    }
}

let numbers = [5, 11, 17, 23, 27];
for (num of numbers) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(`${num} 은/는 소수가 아님.`);
            break;
        }
    }
}