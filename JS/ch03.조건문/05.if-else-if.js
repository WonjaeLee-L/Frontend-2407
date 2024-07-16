/*
 *      if ()
 *      else if()
 *      ...
 *      else
 */
// score
let score = Math.ceil(Math.random() * 50) + 50;     // 51 ~ 100 사이의 정수
let grade = '';

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