
document.addEventListener("DOMContentLoaded", function () {

    //Code for main scroll plugin "FSVS"
    if(window.innerWidth > 1024) {
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
                mouseWheelEvents    : true, // в FireFox отменяем скролл
                mouseWheelDelay     : false,
                mouseDragEvents     : false, // Disabling touch-scroll pages
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
                mouseDragEvents     : false, // Disabling touch-scroll pages
                touchEvents         : true,
                arrowKeyEvents      : true,
                pagination          : true,
                nthClasses          : 2,
                detectHash          : true
            });
        };
    } else {
        // Delete class 'fsvs' from <html> for inclusion scroll
        var html = document.querySelector('html');
        html.classList.remove('fsvs');
    };

    window.addEventListener('resize', function() {
        if(window.innerWidth < 1024 && window.innerWidth > 950) {
            location.reload();
        };
    });

    //Enabling touch-scroll event
    if( window.innerWidth <= 1280 && window.innerWidth > 1024) {
        slider = $.fn.fsvs({
            mouseDragEvents : true
        });

        // Adding class 'nav-true' to '#nav-wrap' for remove it
        var mainNav = document.getElementById('nav-wrap');
        mainNav.classList.add('nav-true');
    };
    //END


    //Adding burger-button in the navWrap
    if(window.innerWidth > 1024) {
        var navWrap = document.getElementById('nav-wrap'),
            burgerButton = "<div id='burgerBtn'><span></span></div>";

        navWrap.insertAdjacentHTML('afterBegin', burgerButton);

        var burgerBtn = document.getElementById('burgerBtn');
        //Opening navWrap and adding text in the elements of fsvsPagination (in the 'li');
        function openPagination() {

            navWrap.classList.toggle('open');

            var fsvsPagination = document.getElementById('fsvs-pagination'),
                li = fsvsPagination.children,
                liText = ["Home", "Web", "Mobile", "Marketing", "Portfolio", "Framework", "Blog", "Recensioni", "Contatti"];
            
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
        burgerBtn.addEventListener("touchend", openPagination);
        

        //Adding language navigation
        // var langLinks = "<div id='langNavHolder'><a href='#' class='ital'>IT</a><a href='#' class='engl'>EN</a></div>";
        // burgerBtn.insertAdjacentHTML('afterEnd', langLinks);

        //Adding links of social networks (f, in, Be)
        var socialLinks = "<div id='socialLinksBox'>" +
                            "<a href='https://www.facebook.com/binovery/'  target='_blank' class='fb'><i class='fa fa-facebook' aria-hidden='true'></i></a>" +
                            "<a href='https://www.linkedin.com/company/binovery'  target='_blank' class='in'><i class='fa fa-linkedin' aria-hidden='true'></i></a>" +
                            "<a href='https://www.behance.net/Binovery' target='_blank' ><i class='fa fa-behance' aria-hidden='true'></i></a>" +
                          "</div>" + 
                          "<a href='open-positions.html' class='open-positions' title='Offerte di lavoro' target='_blank'>" +
                            "<img src='images/people-searcher.svg'>" +
                          "</a>";

        navWrap.insertAdjacentHTML('beforeEnd', socialLinks);
    };
    //END

    // Vertical Alignment 
    if(window.innerWidth > 1024) {
        
        function setMarginTop(contentBlock, slide) {
            var contentBlock = contentBlock,
                slideHeight = slide.offsetHeight,
                contHeight = contentBlock.offsetHeight,
                logoHeight = document.querySelector('.logo').offsetHeight;

            contentBlock.style.cssText = "margin-top:" + parseInt((slideHeight / 2) - (contHeight / 2) - (logoHeight)) + "px";
        };

        //MarginTop for '.web-content' on the slide2
        setMarginTop(document.querySelector('.web-content'), document.getElementById('slide2'));

        //MarginTop for '.mobile-content' on the slide3
        setMarginTop(document.querySelector('.mobile-content'), document.getElementById('slide3'));

        //MarginTop for '.marketing-content' on the slide4
        setMarginTop(document.querySelector('.marketing-content'), document.getElementById('slide4'));

        //MarginTop for '.portfolio-content' on the slide5
        setMarginTop(document.querySelector('.portfolio-content'), document.getElementById('slide5'));

        //MarginTop for '.framework-content' on the slide7
        setMarginTop(document.querySelector('.framework-content'), document.getElementById('slide7'));

        //MarginTop for '.blog-content' on the slide8
        setMarginTop(document.querySelector('.blog-content'), document.getElementById('slide8'));
    };
    //END


    // Stylse for slider pagination at the Portfolio page (Mobile version)
    ;(function() {
        var portfolioSlider = document.querySelector('.potrfolio-slider'),
            outside = portfolioSlider.querySelector('.outside'),
            portfNext = portfolioSlider.querySelector('.portf-next'),
            bxPagerItems = portfolioSlider.querySelectorAll('.bx-pager-item'),
            pagerItem = portfolioSlider.querySelector('.bx-pager-item'),
            sliderWidth = portfolioSlider.clientWidth,
            pagerWidth = pagerItem.clientWidth * bxPagerItems.length;
            outside.style.cssText = 'width:' + (pagerWidth + 36) + 'px';
    }());


    // Stylse for slider pagination at the Team page (Mobile version)
    ;(function() {
        var teamSlider = document.querySelector('.team-slider_sm'),
            outside = teamSlider.querySelector('.outside'),
            teamfNext = teamSlider.querySelector('.team-nt'),
            bxPagerItems = teamSlider.querySelectorAll('.bx-pager-item'),
            pagerItem = teamSlider.querySelector('.bx-pager-item'),
            sliderWidth = teamSlider.clientWidth,
            pagerWidth = pagerItem.clientWidth * bxPagerItems.length;
            outside.style.cssText = 'width:' + (pagerWidth + 36) + 'px';
    }());
    

    
    
 



    console.log(performance.now());
});

$(document).ready(function() {
    
    //Carousel on the slide2
    $('.bxslider-dom-wf').bxSlider({
        mode: 'horizontal',
        nextSelector: '.slider-next',
        prevSelector: '.slider-prev',
        touchEnabled: false,
        slideMargin: 5
    });


    //Popup carousel on the slide2
    $('.bxslider-web-popup').bxSlider({
        mode: 'horizontal',
        nextSelector: '.sl-next',
        prevSelector: '.sl-prev',
        slideMargin: 5
    });

    //SLIDE2: show and hide '.slider-web-popup-holder'
    function swowWebPopup() {
        $('.slider-web-popup-holder').css({
            'opacity' : '1',
            'z-index' : '100'
        });
    };
    $('.bxslider-dom-wf img').bind('click', swowWebPopup);
    $('.bxslider-dom-wf img').bind('touchend', swowWebPopup);

    function hideWebPopup() {
        $('.slider-web-popup-holder').css({
            'opacity' : '0',
            'z-index' : '-1'
        });
    };
    $('.slider-web-popup-holder .closer, #nav-wrap, #slide1, #slide3, #slide4, #slide5, #slide6, #slide7, #slide8, #slide9, #slide10').bind('click', hideWebPopup);
    $('.slider-web-popup-holder .closer, #nav-wrap, #slide1, #slide3, #slide4, #slide5, #slide6, #slide7, #slide8, #slide9, #slide10').bind('touchend', hideWebPopup);


    //Carousel on the slide3
    $('.bxslider-iphone').bxSlider({
        mode: 'horizontal',
        nextSelector: '.slider-next_mob',
        prevSelector: '.slider-prev_mob',
        touchEnabled: false,
        slideMargin: 5
    });

    //Popup carousel on the slide3
    $('.bxslider-mob-popup').bxSlider({
        mode: 'horizontal',
        nextSelector: '.mob-next',
        prevSelector: '.mob-prev',
        slideMargin: 5
    });

    //SLIDE3: show and hide '.slider-mob-popup-holder'
    function swowMobPopup() {
        $('.slider-mob-popup-holder').css({
            'opacity' : '1',
            'z-index' : '100'
        });
    };
    $('.bxslider-iphone img').bind('click', swowMobPopup);
    $('.bxslider-iphone img').bind('touchend', swowMobPopup);

    function hideMobPopup() {
        $('.slider-mob-popup-holder').css({
            'opacity' : '0',
            'z-index' : '-1'
        });
    };
    $('.slider-mob-popup-holder .closer, #nav-wrap, #slide1, #slide2, #slide4, #slide5, #slide6, #slide7, #slide8, #slide9, #slide10').bind('click', hideMobPopup);
    $('.slider-mob-popup-holder .closer, #nav-wrap, #slide1, #slide2, #slide4, #slide5, #slide6, #slide7, #slide8, #slide9, #slide10').bind('touchend', hideMobPopup);


    //Carousel on the slide6
    $('.bxslider-team').bxSlider({
        mode: 'horizontal',
        auto: true,
        pause: 100000,
        speed: 1500,
        nextSelector: '.next_team',
        prevSelector: '.prev_team',
        touchEnabled: false,
    });

    //Masonry settings
    var $container = jQuery('.masonry-container');
    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector : '.item',
            columnWidth: '.item',
            gutterWidth: 30,
            stamp: '.stamp',
            isResizable: true
        });
    });

    //Popup carousel on the slide6
    $('.bxslider-team-popup').bxSlider({
        mode: 'horizontal',
        adaptiveHeight: true,
        nextSelector: '.team-next',
        prevSelector: '.team-prev',
        slideMargin: 5
    });

    //SLIDE6: show and hide '.slider-team-popup-holder'
    function swowTeamPopup() {
        $('.slider-team-popup-holder').css({
            'opacity' : '1',
            'z-index' : '100'
        });
    };
    $('.bxslider-team img').bind('click', swowTeamPopup);
    $('.bxslider-team img').bind('touchend', swowTeamPopup);

    function hideTeamPopup() {
        $('.slider-team-popup-holder').css({
            'opacity' : '0',
            'z-index' : '-1'
        });
    };
    $('.slider-team-popup-holder .closer, #nav-wrap, #slide1, #slide2, #slide3, #slide4, #slide5, #slide7, #slide8, #slide9, #slide10').bind('click', hideTeamPopup);
    $('.slider-team-popup-holder .closer, #nav-wrap, #slide1, #slide2, #slide3, #slide4, #slide5, #slide7, #slide8, #slide9, #slide10').bind('touchend', hideTeamPopup);


    //Carousel on the slide7
    $('.bxslider-framework').bxSlider({
        mode: 'horizontal',
        nextSelector: '.slider-next_frame',
        prevSelector: '.slider-prev_frame',
        touchEnabled: false,
        slideMargin: 5
    });


    //Popup carousel on the slide7
    $('.bxslider-frame-popup').bxSlider({
        mode: 'horizontal',
        nextSelector: '.frame-next',
        prevSelector: '.frame-prev',
        slideMargin: 5
    });

    //SLIDE7: show and hide '.slider-frame-popup-holder'
    function swowFramePopup() {
        $('.slider-frame-popup-holder').css({
            'opacity' : '1',
            'z-index' : '100'
        });
    };
    $('.bxslider-framework img').bind('click', swowFramePopup);
    $('.bxslider-framework img').bind('touchend', swowFramePopup);

    function hideFramePopup() {
        $('.slider-frame-popup-holder').css({
            'opacity' : '0',
            'z-index' : '-1'
        });
    };
    $('.slider-frame-popup-holder .closer, #nav-wrap, #slide1, #slide2, #slide3, #slide4, #slide5, #slide6, #slide8, #slide9, #slide10').bind('click', hideFramePopup);
    $('.slider-frame-popup-holder .closer, #nav-wrap, #slide1, #slide2, #slide3, #slide4, #slide5, #slide6, #slide8, #slide9, #slide10').bind('touchend', hideFramePopup);


    //Carousel on the slide9
    $('.bxslider-reviews').bxSlider({
        mode: 'horizontal',
        adaptiveHeight: true,
        auto: true,
        pause: 10000,
        speed: 700,
        slideMargin: 5
    });

    
    //Show - hide .nav-menu
    $('.nav-menu .burger-btn').bind('click', function() {
        $(this).toggleClass('active');
        $('.fixed-navigation').toggleClass('active');
        $('.nav-menu ul').slideToggle(200);
    });
    $('.slide').bind('click', function() {
        $('.nav-menu .burger-btn').removeClass('active');
        $('.fixed-navigation').removeClass('active');
        $('.nav-menu ul').slideUp(200);
    });


    //Carousel on the slide5(portfolio) mobile version
    $('.bxslider-potrfolio').bxSlider({
        mode: 'horizontal',
        adaptiveHeight: true,
        auto: false,
        nextSelector: '.portf-next',
        prevSelector: '.portf-prev',
        touchEnabled: false,
        slideMargin: 5
    });


    //Carousel on the slide6(team) mobile version
    $('.bxslider-team_sm').bxSlider({
        mode: 'horizontal',
        adaptiveHeight: true,
        auto: false,
        nextSelector: '.team-nt',
        prevSelector: '.team-pr',
        touchEnabled: false,
        slideMargin: 5
    });

    //Fancybox init for WEB
    $(".fancybox-web").fancybox();

    //Fancybox init for MOB
    $(".fancybox-mob").fancybox();

    //Fancybox init for FRAME
    $(".fancybox-frame").fancybox();

    //Fancybox init
    $(".fancybox").fancybox();


    //Mobile version: "Go to top" button
    if( $(window).width() < 1024 ) {

        $(window).on('scroll', function() {
            if( $(this).scrollTop() > 100 ) {
                $('#go-to-top').fadeIn();
            } else {
                $('#go-to-top').fadeOut();
            };
        });

        $('#go-to-top').on('click', function() {
            $('body, html').animate({
                scrollTop: 0
            }, 400);
            return false;
        });

    };


    




    console.log(performance.now());
});
