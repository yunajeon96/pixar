//menu hover p 나타남.
let fadehs = document.querySelectorAll('aside a h1');

fadehs.forEach(function(fadeh){
    fadeh.onmouseover = function(){
        this.nextSibling.style.opacity = 1
    }

    fadeh.onmouseout = function(){
        this.nextSibling.style.opacity = 0
    }
})



if(window.innerWidth >= 430){
    let fadehs = document.querySelectorAll('aside a h1');

    fadehs.forEach(function(fadeh){
        fadeh.onmouseover = function(){
            this.nextSibling.style.opacity = 1
        }

        fadeh.onmouseout = function(){
            this.nextSibling.style.opacity = 0
        }
    })
}

$(".icon").click(function(){
    $("aside a:not(:first-of-type)").stop().slideToggle(1500);
});

