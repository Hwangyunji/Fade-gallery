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
            // updateIndicator(imgCount);
        }
    });

    // 이전 이미지 보기
    $('.prevBtn').click(function(){
        if(imgCount > 0) {
            imgCount--; // 이미지 번호 감소
            changeSlider(imgCount);
            // updateIndicator(imgCount);
        }
    });

    // 자동재생 - 4초마다 자동재생 시키시오
    setInterval(function(){
        imgCount++;
        if(imgCount > 2) {
            imgCount = 0;
        }
        console.log(imgCount);
        changeSlider(imgCount);
        // updateIndicator(imgCount);
    },4000)

    // 인디케이터 초기화(시작)
    updateIndicator(imgCount);

});

// 이미지 번호 -> 전역 변수
let imgCount = 0; 

// 하단 인디케이터 버튼을 누르면 해당 이미지(번호) 출력
function changeSlider(num) {
    imgCount = num; // 이미지번호 업데이트(인디케이터, arrow 공통)
    $('.slider img')
        .fadeOut(1000)
        .eq(num).fadeIn(1000);

        // 인디케이터 업데이트
        updateIndicator(imgCount);
}

// 인디케이터 스타일 업데이트
function updateIndicator(num) {
    // 인디케이터 스타일 초기화
    $('.indicator a').css('color', 'black');

    // imgCount 번호 = 인디케이터 번호(스타일변경)
    $('.indicator a')
    .eq(imgCount)
    .css('color', 'red');
}


