//

let arr = [1, 2, 3, 4];
//sumOfSquare는 안에 각 숫자의 제곱의 합을 말함
function sumOfSquare(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
        }
        return sum;
}
console.log(sumOfSquare(arr));

//squareOfSum은 안의 숫자의 합에 제곱을 말함
function squareOfSum(arr) {
    let square = 0;
    for (let i = 0; i < arr.length; i++) {
        square += arr[i];
    }
    return square * square;
}
console.log(squareOfSum(arr));