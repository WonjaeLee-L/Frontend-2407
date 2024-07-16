// 생년월일에 따른 나이 계산

const bYear = 1991, bMonth = 7, bDay = 5;  // let보다 바뀌지 않는 것은 const로 많이 씀
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1;      //JS는 월에 1을 더해주어야 함(기본 0)
let tDay = today.getDate();             // day는 요일, date가 일

let age = 0;



// 현재월이 생월보다 작은 경우
if (tMonth < bMonth) {
    age = tYear - bYear - 1;
} // 현재월이 생월보다 큰 경우
else if (tMonth > bMonth) {
    age = tYear - bYear;
} // 현재월이 생월과 같은 경우 - 현재 일과 생일을 비교
else if (tDay >= bDay)
    {
    age = tYear - bYear;
} 
else {
    age = tYear - bYear -1 ;
}


console.log(`생일: ${bYear}-${bMonth}-${bDay}, 나이: ${age}`);