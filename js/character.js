//돌아가는 원형 텍스트
$(function(){
    $("h1").lettering();
});



//이벤트
$(function(){
    $(".circle1 a").mouseover(function(){
        $(this).css("transform","scale(1.2").css("transition",".5s");
    });

    $(".circle1 a").mouseout(function(){
        $(this).css("transform","none");
    })



    var liarr = document.querySelectorAll("li");
    var poparr = document.querySelectorAll(".pop");

    liarr.forEach(function (li, i) {
        li.onclick = function () {
            console.log(poparr[i].parentNode)
            poparr[i].parentNode.style.display="block";
            poparr[i].style.display = "flex";
        }
    })


    $('.close').click(function () {
        $('.pop_up').hide();
        $('.pop').hide();
    });

});

$(function(){ 

  let pn=location.pathname;
    if(pn.includes('character1.html')){
        $(".lt").click(function(){
            location.href='character.html'
        });
    }else if(pn.includes('character.html')){
        $(".lt").click(function(){
            location.href='character1.html'
        });
    }
    
})

