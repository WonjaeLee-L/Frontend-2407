/*
 *      if ()
 *      else if()
 *      ...
 *      else
 */
// score
let score = Math.ceil(Math.random() * 50) + 50;     // 51 ~ 100 사이의 정수
let grade = '';
let fb = '';

if (score >= 90)        // 조건 세울 때, 범위가 가장 작은 애부터 한다. 60부터 시작하면 60이 A 된다.
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else
    grade = 'F';

    console.log(`점수: ${score}, 학점: ${grade}`);

    
// FizzBuzz
// 숫자가 5로 나누어지면 Fizz, 7로 나누어지면 Buzz, 5와 7 둘 다 나누어지면 FizzBuzz
// 위의 경우가 아니면 숫자를 출력

if (score % 35 == 0)    // (score % 5 ==0 && score % 7 == 0)
    fb = 'FizzBuzz';    // console.log('FizzBuzz'); // 그냥 score로 해도 됨.
else if (score % 5 == 0)
    fb = 'Fizz';        // console.log('Fizz');
else if (score % 7 == 0)
    fb = 'Buzz';        // console.log('Buzz');
else
    fb = score;         // console.log(score);

    console.log(`점수: ${score}, 학점: ${grade}, ${fb}`);