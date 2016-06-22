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

    //TABS for articles
    ;(function(elem) {
        if(!elem) return;

        var articleNav = document.getElementById('articleNav');

        articleNav.addEventListener('click', showTabList);

        function showTabList() {
            var target = event && event.target,
                id = target.getAttribute('data-id'),
                tabId = document.getElementById(id);

            if(id) {                            
                removeClass()
                tabId.classList.add('active');
                target.classList.add('active');
            };            
        };

        function removeClass() {
            var tabList = document.querySelectorAll('.tab-list'),
                link = articleNav.querySelectorAll('a');
            for(var i = 0; i < tabList.length; i++) {
                tabList[i].classList.remove('active');
                link[i].classList.remove('active');
            };
        };
    }(articleNav));

});