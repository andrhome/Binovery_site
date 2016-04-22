
// jQuery(document).ready( function($) {

	

// });

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
            mouseDragEvents     : true,
            touchEvents         : true,
            arrowKeyEvents      : true,
            pagination          : true,
            nthClasses          : 2,
            detectHash          : true
        });
    };
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

    
    //
    var webContent = $('.web-content'),
        slide2Height = $('#slide2').height(),
        webContHeight = $(webContent).height(),
        logoHeight = $('logo').height();

    webContent.css({marginTop : slide2Height / 2 - webContHeight / 2 - logoHeight + 'px'});

    $(window).resize( function() {
        console.log(slide2Height);
        webContent.css({marginTop : slide2Height / 2 - webContHeight / 2 - logoHeight + 'px'});
    });
    

    
    


    
    
 



    console.log(performance.now());
});

