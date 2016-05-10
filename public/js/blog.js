document.addEventListener('DOMContentLoaded', function() {

    //Sets the height of the wrapper
    var windowHeight = window.innerHeight,
        wrapper = document.getElementById('wrapper');
    wrapper.style.cssText = 'height:' + windowHeight + 'px';
    

    //OPEN-BLOG and FULL-ARTICLE PAGE: 
    //toggle class at '.article-holder'
    ;(function() {
        var fullArticleHolder = document.querySelector('.article-holder'),
            burgerBtn = fullArticleHolder.querySelector('.burger-btn'),
            articlesNav = fullArticleHolder.querySelector('.articles-nav');

        burgerBtn.addEventListener('click', toggleClass);
        function toggleClass() {
            fullArticleHolder.classList.toggle('nav-active');
        };
    }());

});