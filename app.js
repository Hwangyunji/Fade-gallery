// app.js
$(function(){

    // 모든 이미지 fade out
    $('.slider img').fadeOut(0);
    // 첫번째(현재) 이미지 fade in
    $('.slider img').eq(0).fadeIn(0);

    // 다음 이미지 보기
    $('.nextBtn').click(function(){
        if(imgCount < 2) {
            imgCount++; // 이미지 번호 증가
            changeSlider(imgCount);
        }
    });

    // 이전 이미지 보기
    $('.prevBtn').click(function(){
        if(imgCount > 0) {
            imgCount--; // 이미지 번호 감소
            changeSlider(imgCount);
        }
    });

    // 자동재생

});

// 이미지 번호 -> 전역변수
let imgCount = 0; 

// 하단 인디케이터 버튼을 누르면 해당 이미지(번호) 출력
function changeSlider(num) {
    imgCount = num // 이미지번호 업데이트(인티케이터, arrow 공통)
    $('.slider img')
        .fadeOut()
        .eq(num).fadeIn();
}

