/*
Math.random() 0 이상 1미만의 실수를 랜덤으로 가져옴
var num = parseInt(Math.random() * 45 + 1) //1이상 46미만 실수
parseInt()  소수점은 버리고 정수로 변환해줌
*/

//배열 
var lotto = [];
for (var i = 0; i < 6; i++) {
    lotto.push(parseInt(Math.random() * 45 + 1)) //배열에 값 추가s    
}

document.write(lotto)