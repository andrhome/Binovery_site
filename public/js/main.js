
document.addEventListener("DOMContentLoaded", function () {

    //Code for main scroll plugin "FSVS"
    var brouser = navigator.userAgent;
    var regV = /firefox/i;
    if(brouser.search(regV) != -1) {
        var slider = $.fn.fsvs({
            autoPlay            : false,
            speed               : 1000,
            bodyID              : 'fsvs-body',
            selector            : '> .slide',
            mouseSwipeDisance   : 40,
            afterSlide          : function(){},
            beforeSlide         : function(){},
            endSlide            : function(){},
            mouseWheelEvents    : false, // в FireFox отменяем скролл
            mouseWheelDelay     : false,
            mouseDragEvents     : true,
            touchEvents         : true,
            arrowKeyEvents      : true,
            pagination          : true,
            nthClasses          : 2,
            detectHash          : true
        });
    } else{
        slider = $.fn.fsvs({
            autoPlay            : false,
            speed               : 1000,
            bodyID              : 'fsvs-body',
            selector            : '> .slide',
            mouseSwipeDisance   : 40,
            afterSlide          : function(){},
            beforeSlide         : function(){},
            endSlide            : function(){},
            mouseWheelEvents    : true,
            mouseWheelDelay     : false,
            mouseDragEvents     : false,
            touchEvents         : true,
            arrowKeyEvents      : true,
            pagination          : true,
            nthClasses          : 2,
            detectHash          : true
        });
    };

    //Enabling touch event
    // if( $(window).width() < 1030 ) {
    //     slider = $.fn.fsvs({
    //         speed               : 1000,
    //         bodyID              : 'fsvs-body',
    //         selector            : '> .slide',
    //         mouseSwipeDisance   : 40,
    //         afterSlide          : function(){},
    //         beforeSlide         : function(){},
    //         endSlide            : function(){},
    //         mouseWheelEvents    : true,
    //         mouseWheelDelay     : false,
    //         mouseDragEvents     : true,
    //         touchEvents         : true,
    //         arrowKeyEvents      : true,
    //         pagination          : true,
    //         nthClasses          : 2,
    //         detectHash          : true
    //     });
    //}
    //END


    //Adding burger-button in the navWrap
    var navWrap = document.getElementById('nav-wrap'),
        burgerButton = "<div id='burgerBtn'><span></span></div>";

    navWrap.insertAdjacentHTML('afterBegin', burgerButton);

    var burgerBtn = document.getElementById('burgerBtn');
    //Opening navWrap and adding text in the elements of fsvsPagination (in the 'li');
    function openPagination() {

        navWrap.classList.toggle('open');

        var fsvsPagination = document.getElementById('fsvs-pagination'),
            li = fsvsPagination.children,
            liText = ["Home", "Web", "Mobile", "Marketing", "Portfolio", "Team", "Framework", "Blog", "Reviews", "Contacts"];
        
        if(navWrap.classList.contains('open')) {
            for(var i = 0; i < li.length; i++) {
                li[i].innerHTML = '<span><span></span></span>' + '<i>' + liText[i] + '</i>';
            };
        } else{
            for(var i = 0; i < li.length; i++) {
                li[i].innerHTML = '<span><span></span></span>';
            };
        };
    };
    burgerBtn.addEventListener("click", openPagination);

    //Adding language navigation
    var langLinks = "<div id='langNavHolder'><a href='#' class='engl'>EN</a><a href='#' class='ital'>IT</a></div>";
    burgerBtn.insertAdjacentHTML('afterEnd', langLinks);

    //Adding links of social networks (f, in, Be)
    var socialLinks = "<div id='socialLinksBox'><a href='#' class='fb'><i class='fa fa-facebook' aria-hidden='true'></i></a><a href='#' class='in'><i class='fa fa-linkedin' aria-hidden='true'></i></a><a href='#'><i class='fa fa-behance' aria-hidden='true'></i></a></div>"
    navWrap.insertAdjacentHTML('beforeEnd', socialLinks);
    //END

    
    //MarginTop for '.web-content' on the slide2
    ;(function() {
        var webContent = document.querySelector('.web-content'),
            slide2Height = document.getElementById('slide2').offsetHeight,
            webContHeight = webContent.offsetHeight,
            logoHeight = document.querySelector('.logo').offsetHeight;

        webContent.style.cssText = "margin-top:" + parseInt((slide2Height / 2) - (webContHeight / 2) - (logoHeight)) + "px";
        
        window.addEventListener('resize', function() {
            webContent.style.cssText = "margin-top:" + parseInt((slide2Height / 2) - (webContHeight / 2) - (logoHeight)) + "px";
        });
    }());


    //MarginTop for '.mobile-content' on the slide3
    ;(function() {
        var mobileContent = document.querySelector('.mobile-content'),
            slide3Height = document.getElementById('slide3').offsetHeight,
            mobileContHeight = mobileContent.offsetHeight,
            logoHeight = document.querySelector('.logo').offsetHeight;

        mobileContent.style.cssText = "margin-top:" + parseInt((slide3Height / 2) - (mobileContHeight / 2) - (logoHeight)) + "px";
        
        window.addEventListener('resize', function() {
            mobileContent.style.cssText = "margin-top:" + parseInt((slide3Height / 2) - (mobileContHeight / 2) - (logoHeight)) + "px";
        });
    }());


    //MarginTop for '.marketing-content' on the slide4
    ;(function() {
        var marketingContent = document.querySelector('.marketing-content'),
            slide4Height = document.getElementById('slide4').offsetHeight,
            marketingContHeight = marketingContent.offsetHeight,
            logoHeight = document.querySelector('.logo').offsetHeight;

        marketingContent.style.cssText = "margin-top:" + parseInt((slide4Height / 2) - (marketingContHeight / 2) - (logoHeight)) + "px";
        
        window.addEventListener('resize', function() {
            marketingContent.style.cssText = "margin-top:" + parseInt((slide4Height / 2) - (marketingContHeight / 2) - (logoHeight)) + "px";
        });
    }());


    //MarginTop for '.portfolio-content' on the slide5
    ;(function() {
        var portfolioContent = document.querySelector('.portfolio-content'),
            slide5Height = document.getElementById('slide5').offsetHeight,
            portfolioContHeight = portfolioContent.offsetHeight,
            logoHeight = document.querySelector('.logo').offsetHeight;

        portfolioContent.style.cssText = "margin-top:" + parseInt((slide5Height / 2) - (portfolioContHeight / 2) - (logoHeight)) + "px";
        
        window.addEventListener('resize', function() {
            portfolioContent.style.cssText = "margin-top:" + parseInt((slide5Height / 2) - (portfolioContHeight / 2) - (logoHeight)) + "px";
        });
    }());


    //MarginTop for '.framework-content' on the slide7
    ;(function() {
        var frameworkContent = document.querySelector('.framework-content'),
            slide7Height = document.getElementById('slide7').offsetHeight,
            frameworkContHeight = frameworkContent.offsetHeight,
            logoHeight = document.querySelector('.logo').offsetHeight;

        frameworkContent.style.cssText = "margin-top:" + parseInt((slide7Height / 2) - (frameworkContHeight / 2) - (logoHeight)) + "px";
        
        window.addEventListener('resize', function() {
            frameworkContent.style.cssText = "margin-top:" + parseInt((slide7Height / 2) - (frameworkContHeight / 2) - (logoHeight)) + "px";
        });
    }());


    //MarginTop for '.blog-content' on the slide8
    ;(function() {
        var blogContent = document.querySelector('.blog-content'),
            slide8Height = document.getElementById('slide8').offsetHeight,
            blogContHeight = blogContent.offsetHeight,
            logoHeight = document.querySelector('.logo').offsetHeight;

        blogContent.style.cssText = "margin-top:" + parseInt((slide8Height / 2) - (blogContHeight / 2) - (logoHeight)) + "px";
        
        window.addEventListener('resize', function() {
            blogContent.style.cssText = "margin-top:" + parseInt((slide8Height / 2) - (blogContHeight / 2) - (logoHeight)) + "px";
        });
    }());

    


    // //Creating own event for animation PART_1
    // (function(){
    //     //Сохраняем ссылку на стандартный метод jQuery
    //     var originalAddClassMethod = jQuery.fn.addClass;
    //     //Переопределяем
    //     $.fn.addClass = function(){
    //         var result = originalAddClassMethod.apply(this, arguments);
    //         //Инициализируем событие смены класса
    //         $(this).trigger('cssClassChanged');
    //         return result;
    //     }
    // })();
    // //PART_2: Adding class for animation element (animetion on slide2)
    // $(function(){
    //     $("#slide2").bind('cssClassChanged', function(){ 
    //         if( $("#slide2").hasClass('active-slide') ) {
    //             setTimeout(function() {
    //                 $('#slide2 .left-col').addClass('fadeInUp'); //animation name
    //                 $('#slide2 .right-col').addClass('fadeInUp');
    //             }, 1);
    //         } else{
    //             setTimeout(function() {
    //                 $('#slide2 .left-col').removeClass('fadeInUp');
    //                 $('#slide2 .right-col').removeClass('fadeInUp');
    //             }, 1);
    //         }
    //     });
    // });
    // //PART_2: Adding class for animation element (animetion on slide3)
    // $(function(){
    //     $("#slide3").bind('cssClassChanged', function(){ 
    //         if( $("#slide3").hasClass('active-slide') ) {
    //             setTimeout(function() {
    //                 $('#slide3 .left-col').addClass('fadeInUp'); //animation name
    //                 $('#slide3 .right-col').addClass('fadeInUp');
    //             }, 1);
    //         } else{
    //             setTimeout(function() {
    //                 $('#slide3 .left-col').removeClass('fadeInUp');
    //                 $('#slide3 .right-col').removeClass('fadeInUp');
    //             }, 1);
    //         }
    //     });
    // });
    

    
    

    
    


    
    
 



    console.log(performance.now());
});

$(document).ready(function() {
    //Vertical carousel on the slide2
    $('.bxslider-dom-wf').bxSlider({
        mode: 'vertical',
        nextSelector: '.slider-next',
        prevSelector: '.slider-prev',
        slideMargin: 5
    });

    //Vertical carousel on the slide3
    $('.bxslider-iphone').bxSlider({
        mode: 'vertical',
        nextSelector: '.slider-next_mob',
        prevSelector: '.slider-prev_mob',
        slideMargin: 5
    });

    //Vertical carousel on the slide7
    $('.bxslider-framework').bxSlider({
        mode: 'vertical',
        nextSelector: '.slider-next_frame',
        prevSelector: '.slider-prev_frame',
        slideMargin: 5
    });

    //Vertical carousel on the slide9
    $('.bxslider-reviews').bxSlider({
        adaptiveHeight: true,
        mode: 'horizontal',
        auto: true,
        pause: 5000,
        speed: 700,
        slideMargin: 5
    });

});
