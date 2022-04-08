/*
Math.random() 0 이상 1미만의 실수를 랜덤으로 가져옴
var num = parseInt(Math.random() * 45 + 1) //1이상 46미만 실수
parseInt()  소수점은 버리고 정수로 변환해줌
*/

//배열 
var lotto = [];
while (lotto.length < 6) {
    var num = parseInt(Math.random() * 45 + 1) //랜덤 숫자 num에 넣어줌    
    if (lotto.indexOf(num) == -1) { //indexOf() 값이 들어있지 않으면 -1 반환
        lotto.push(num)  //indexOf 로 그 값이 리스트에 없으면 추가하기
    }
}
lotto.sort((a, b) => a - b); //오름차순 정렬
document.write("<div class='ball ball1'>" + lotto[0] + "</div>");
document.write("<div class='ball ball2'>" + lotto[1] + "</div>");
document.write("<div class='ball ball3'>" + lotto[2] + "</div>");
document.write("<div class='ball ball4'>" + lotto[3] + "</div>");
document.write("<div class='ball ball5'>" + lotto[4] + "</div>");
document.write("<div class='ball ball6'>" + lotto[5] + "</div>");

