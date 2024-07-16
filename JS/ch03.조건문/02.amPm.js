// 현재 날짜 및 시간을 아는 방법
let today = new Date();     // Date라는 class가 있고, 새로운 객체를 생성하는 방법이 new
console.log(today);         // 2024-07-16T01:09:22.195Z ( +9 해야 우리나라 시간 )
let hour = today.getHours();    
console.log(hour);          // 10
console.log(new Date().getHours()); // 10

if (hour < 12)
    console.log(`오전 ${hour}시 ${today.getMinutes()}분 입니다.`);
else
    console.log(`오후 ${hour - 12}시 ${today.getMinutes()}분 입니다.`);

console.log(`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`);     // Js에서 월은 0부터 시작해서
console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);     // getMonth에는 +1 해야함