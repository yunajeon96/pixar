//slide img
let page = 1;
if(window.matchMedia("(min-width: 1281px)").matches){
    $('#slidewrap ul .s1 a> img').css({'transform':'scale(2.45, 2.25)','z-index':1});
    $('#slidewrap ul .s2 a> img').css({'transform':'scale(1)'});
}

if (window.matchMedia("(min-width: 769px) and (max-width: 1280px)").matches){
    $('#slidewrap ul .s1 a> img').css({'transform':'scale(2.15, 2.55)','z-index':1, 'transform-origin': 'right'});
    $('#slidewrap ul .s2 a> img').css({'transform':'scale(1)'});
}

if (window.matchMedia("(max-width:768px)").matches){
    $('#slidewrap ul a> img').css({'transform':'scale(1)'});
}

// translate : logo
let span = document.querySelectorAll('#section1 ul li> span');
let logo = document.querySelectorAll('#section1 ul li> img');

document.querySelector('#section1 ul .s1> img').style.transform = 'translateY(0)';
document.querySelector('#section1 ul .s1> img').style.opacity = 1;
document.querySelector('#section1 ul .s1> span').style.transform = 'translateY(0)';
document.querySelector('#section1 ul .s1> span').style.opacity = 1;


function slide(){
    if(window.matchMedia("(min-width: 769px)").matches){
        if(page == 1){

            $('#slidewrap ul').stop().animate({marginLeft : '-14%'},2000, function(){
                $('#slidewrap ul li:nth-of-type(2) a> img').css({'transform':'scale(2.45, 2.25)', 'transition': '2s'});
            });

            
            if (window.matchMedia("(min-width: 769px) and (max-width: 1280px)").matches){
                $('#slidewrap ul').stop().animate({marginLeft : 0},2000, function(){
                    $('#slidewrap ul li:nth-of-type(2) a> img').css({'transform':'scale(2.15, 2.55)', 'transition': '2s'});
                });
            }

            $('#slidewrap ul li:nth-of-type(1) a> img').css({'transform':'scale(1)','z-index':0});
            document.querySelector('#section1 ul .s1> img').style.transform = 'translateY(-300px)';
            document.querySelector('#section1 ul .s1> img').style.opacity = 0;
            document.querySelector('#section1 ul .s1> span').style.transform = 'translateY(300px)';
            document.querySelector('#section1 ul .s1> span').style.opacity = 0;

            setTimeout(()=>{
                logo[1].style.transform = 'translateY(0px)';
                logo[1].style.opacity = 1;
                span[1].style.transform = 'translateY(0px)';
                span[1].style.opacity = 1;
            }, 2000) 

            page++;
            switch (page) {
                case 1: roma = 'Ⅰ'; break;
                case 2: roma = 'Ⅱ'; break;
            }
            $('#numberbox h1:first-of-type').text(roma);
            if(page > 16){
                page = 1
            }

        } else {     

            $('#slidewrap ul li:nth-of-type(1) a> img').css({'transform':''});

            $('#slidewrap ul').stop().animate({marginLeft : '-57.7%'},2000,function(){  
                    logo[page-1].style.transform = 'translateY(0)';
                    logo[page-1].style.opacity = 1;

                    span[page-1].style.transform = 'translateY(0)';
                    span[12].style.transform = 'skew(0deg, 22deg)';
                    span[page-1].style.opacity = 1;

                $('#slidewrap ul li:first').appendTo('#slidewrap ul');
                $('#slidewrap ul').css('margin-left', '-14%');
            });


            
            if (window.matchMedia("(min-width: 769px) and (max-width: 1280px)").matches){
                $('#slidewrap ul').stop().animate({marginLeft : '-53.08%'},2000,function(){  
                    logo[page-1].style.transform = 'translate(0,0)';
                    logo[page-1].style.opacity = 1;

                    span[page-1].style.transform = 'translate(0,0)';
                    span[12].style.transform = 'skew(0deg, 22deg)';
                    span[page-1].style.opacity = 1;

                $('#slidewrap ul li:first').appendTo('#slidewrap ul');
                $('#slidewrap ul').css('margin-left', 0);
            });
            }

            logo.forEach(function (logo) {
                logo.style.transform = 'translateY(-300px)';
                logo.style.opacity = 0;
            });        
            span.forEach(function (span) {
                span.style.transform = 'translateY(300px)';
                span.style.opacity = 0;
            });
            
            $('#slidewrap ul li:nth-of-type(2) a> img').css('transform','scale(1)');
            page ++;
            switch(page){
                case 1: roma = 'Ⅰ'; break;
                case 2: roma = 'Ⅱ'; break;
                case 3: roma = 'Ⅲ'; break;
                case 4: roma = 'Ⅳ'; break;
                case 5: roma = 'Ⅴ'; break;
                case 6: roma = 'Ⅵ'; break;
                case 7: roma = 'Ⅶ'; break;
                case 8: roma = 'Ⅷ'; break;
                case 9: roma = 'IX'; break;
                case 10: roma = 'Ⅹ'; break;
                case 11: roma = 'ⅩⅠ'; break;
                case 12: roma = 'ⅩⅡ'; break;
                case 13: roma = 'ⅩⅢ'; break;
                case 14: roma = 'ⅩⅣ'; break;
                case 15: roma = 'ⅩⅤ'; break;
                case 16: roma = 'ⅩⅥ'; break;
                case 17: roma = 'Ⅰ'; break;
            }
            $('#numberbox h1:first-of-type').text(roma);
            if(page > 16){
                //first slide stop
                clearInterval(set);

                //second slide
                $('#section1 ul li a> img').css({'transform':'scale(1)', 'transition':'none'})
                function sl2(){   
                    if (window.matchMedia("(min-width: 1281px)").matches) {            
                        $('#slidewrap ul').stop().animate({marginLeft : '-57.7%'},2000,function(){  
                            $('#slidewrap ul li:first').appendTo('#slidewrap ul');
                            $('#slidewrap ul').css('margin-left', '-14%');
                        });
                    }
                    if (window.matchMedia("(min-width: 769px) and (max-width: 1280px)").matches){              
                        $('#slidewrap ul').stop().animate({marginLeft : '-53.08%'},2000,function(){  
                            $('#slidewrap ul li:first').appendTo('#slidewrap ul');
                            $('#slidewrap ul').css('margin-left', 0);
                        });
                    }
                }
                setInterval(sl2,4000)
                // sl2()

                function fslide(){
                    if (window.matchMedia("(min-width: 1401px)").matches){
                        $('#footerwrap').animate({marginTop:'-170px'},4000,function(){
                            $('#footerwrap > div:first-of-type').appendTo('#footerwrap');
                            $('#footerwrap').css('margin-top','30px')
                        });
                    }

                    if (window.matchMedia("(min-width:1281px) and (max-width:1400px)").matches){
                        $('#footerwrap').animate({marginTop:'-160px'},4000,function(){
                            $('#footerwrap > div:first-of-type').appendTo('#footerwrap');
                            $('#footerwrap').css('margin-top','15px')
                        });
                    }

                    if (window.matchMedia("(min-width: 769px) and (max-width: 1280px)").matches){
                        $('#footerwrap').animate({marginTop:'-150px'},4000,function(){
                            $('#footerwrap > div:first-of-type').appendTo('#footerwrap');
                            $('#footerwrap').css('margin-top','10px')
                        });
                    }
                }
                setInterval(fslide,7000)
                // fslide()
            }
        
        }
    }


    if(window.matchMedia("(max-width: 768px)").matches){
        function sl2(){
            $('#slidewrap ul').stop().animate({marginLeft : '-111%'},2000,function(){ 
                logo[page-1].style.transform = 'translate(0,0)';
                logo[page-1].style.opacity = 1;

                span[page-1].style.transform = 'translate(0,0)';
                span[12].style.transform = 'skew(0deg, 22deg)';
                span[page-1].style.opacity = 1; 
                $('#slidewrap ul li:first').appendTo('#slidewrap ul');
                $('#slidewrap ul').css('margin-left', 0);
            });            

            logo.forEach(function (logo) {
                logo.style.transform = 'translateY(-300px)';
                logo.style.opacity = 0;
            });        
            span.forEach(function (span) {
                span.style.transform = 'translateY(300px)';
                span.style.opacity = 0;
            });
        }
        sl2();

        function fslide(){
            if(window.matchMedia("(min-width:431px) and (max-width:768px)").matches){
                $('#footerwrap').animate({marginTop:'-150px'},4000,function(){
                    $('#footerwrap > div:first-of-type').appendTo('#footerwrap');
                    $('#footerwrap').css('margin-top','50px')
                });
            }
            if(window.matchMedia("(max-width:430px)").matches){
                $('#footerwrap').animate({marginTop:'-187px'},4000,function(){
                    $('#footerwrap > div:first-of-type').appendTo('#footerwrap');
                    $('#footerwrap').css('margin-top','10px')
                });
            }
        }
        // setInterval(fslide,15000);
        fslide()

        if(page >= 1 || page <=16){
            page++;
            switch (page) {
                case 1: roma = 'Ⅰ'; break;
                case 2: roma = 'Ⅱ'; break;
                case 3: roma = 'Ⅲ'; break;
                case 4: roma = 'Ⅳ'; break;
                case 5: roma = 'Ⅴ'; break;
                case 6: roma = 'Ⅵ'; break;
                case 7: roma = 'Ⅶ'; break;
                case 8: roma = 'Ⅷ'; break;
                case 9: roma = 'IX'; break;
                case 10: roma = 'Ⅹ'; break;
                case 11: roma = 'ⅩⅠ'; break;
                case 12: roma = 'ⅩⅡ'; break;
                case 13: roma = 'ⅩⅢ'; break;
                case 14: roma = 'ⅩⅣ'; break;
                case 15: roma = 'ⅩⅤ'; break;
                case 16: roma = 'ⅩⅥ'; break;
            }

            $('#numberbox h1:first-of-type').text(roma);
        }
        
        if(page > 16){
            page = 1;
            roma = 'Ⅰ';
            $('#numberbox h1:first-of-type').text(roma);
            
        }
        
        
    }
}
var set = setInterval(slide,7000);