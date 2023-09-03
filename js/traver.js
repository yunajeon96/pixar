//main slide//

$('.prev').click(function () {

    $('.slide li:last').prependTo('.slide');

    $('.slide').css('margin-left', '-100%');

    $('.slide').stop().animate({ marginLeft: 0 }, 800);

});



$('.next').click(function () {

    $('.slide').stop().animate({ marginLeft: '-100%' }, 800, function () {

        $('.slide li:first').appendTo('.slide');

        $('.slide').css({ marginLeft: 0 });

    });

});


//slide li modal//

$(function () {
    $(".iconbox").click(function () {
        let img = new Image();
        img.src = $('.slide li:first img').attr("src")
        $('.modalBox').prepend(img);
        $(".modal").show();
    });

    $(".modal").click(function (e) {
        $(".modal").toggle();
    });
});


//패키지 예약버튼 클릭시 팝업

$(function () {
    $(".popup").hide();
    $(".btn").click(function () {
        $(".popup").show();
    });

    $(".xbtn").click(function () {
        $(".popup").hide();
    });
});


//팝업 셀렉트 수량 계산

$(function () {

    $(".select").change(function () {

        $(".txt").text($(this).val());

    });

});


// 메인 슬라이드 가운데에 마우스 올리면 나타나는 설명 
$(function () {
    $(".pngimg").mouseover(function () {
        $(this).css("opacity", "1");
    });
});

$(function () {
    $(".pngimg").mouseout(function () {
        $(this).css("opacity", "0");
    });
});

//+ 버튼 클릭하면 백그라운드 오파시티 내려갔다가 모달 박스 이미지 클릭 하면 오파시티 원래 상태로 복귀

$(function () {
    $(".iconbox").click(function () {
        $(".backgroundcolor").css({"display":"block", "opacity":"0.2"});
    });

    $(".modal").click(function () {
        $(".backgroundcolor").css("opacity","0");
    });
});

$(function(){
    $(".btn").click(function(){
        $(".backgroundcolor").css({"display":"block", "opacity":"0.2"});
    });

    $(".xbtn").click(function(){
        $(".backgroundcolor").css("opacity","0");
    });
});