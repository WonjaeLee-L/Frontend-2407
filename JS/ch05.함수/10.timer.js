// 타이머 내장 함수 setTimeout(A, B); A함수를 B시간 후에 실행 
// setInterval은 a를 b마다 실행. setTimeout 필요

setTimeout(function() {
    console.log('3초 경과');
}, 3000);

const si = setInterval(() => {
    console.log(new Date());
}, 1000);

setTimeout(() => {
    console.log('5초 경과 후 초시계 정지시킴');
    clearInterval(si);
}, 5100);