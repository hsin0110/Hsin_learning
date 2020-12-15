//關於我們大圖切換
var slideIndex = 0;
autoSlides();


function autoSlides(n) {
    var i;
    var slides = document.getElementsByClassName('slideImages');
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style = 'none';
    }
    
    slideIndex++;    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(autoSlides, 3000);
};


$(document).ready(function () {
    //上方列表進修項目的次選項
    $('.submenu').click(function (e) {
        e.preventDefault();
        $('.subitems').slideToggle();
    });
    //點選項目滑至該處
    $('.section00').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    $('.section01').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#idea').offset().top - 60
        }, 700);
    });
    $('.section03').click(function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: $('#news').offset().top - 60
        }, 700);
    });
    $('.section04').click(function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: $('#contact').offset().top
        }, 700);
    });
    //回到上方按鈕
    $('#topbtn').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    //手機版本點選箭頭呼叫上方列表
    $('.phone_bar').click(function () {
        $('.phone_menu').slideToggle(700);
    })

    var windowWidth = $(window).width();
    /////上方列表點選滑至該處在>980px及<980px時減的數字不同////
    if (windowWidth > 980) {
        $('.section2_1').click(function (e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('#japanese').offset().top - 140
            }, 700);
        });
        $('.section2_2').click(function (e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('#dessert').offset().top - 140
            }, 700);
        });
        $('.section2_3').click(function (e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('#running').offset().top - 140
            }, 700);
        });
        $('.section2_4').click(function (e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('#climbing').offset().top - 140
            }, 700);
        });
    } else {
        $('.section2_1').click(function (e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('#japanese').offset().top - 700
            }, 700);
        });
        $('.section2_2').click(function (e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('#dessert').offset().top - 700
            }, 700);
        });
        $('.section2_3').click(function (e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('#running').offset().top - 700
            }, 700);
        });
        $('.section2_4').click(function (e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('#climbing').offset().top - 700
            }, 700);
        });
    }
    ////在裝置980px以上時，上方列表及課程個別項目才出現效果////
    if (windowWidth > 980) {
        //下滑時，上方列表出現
        window.onscroll = function () {
            showHeader();
        };
        function showHeader() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById('header').style.top = "0";
            } else {
                document.getElementById('header').style.top = "-70px";
            }
        }
        //idea出現底線
        function borderShow() {
            var ideaRange = document.getElementById('idea');
            var addborder_title = ideaRange.getElementsByTagName('h3');
            //觸發點：瀏覽器視窗底部位置減掉圖片一半高度作為觸發點
            var triggerPoint = (window.scrollY + window.innerHeight) - ideaRange.clientHeight / 2;
            //觸發點底部位置
            var ideaBottom = ideaRange.offsetTop + ideaRange.clientHeight;
            //瀏覽器到idea區塊一半下方的位置時
            var isHalf = triggerPoint > ideaRange.offsetTop;
            //瀏覽器還沒通過idea區塊的底部時
            var isNotHalf = window.scrollY < ideaBottom;
            //若瀏覽器底部大於idea區塊的一半且未通過idea區塊底部
            //就讓底線出現
            //反之隱藏
            if (isHalf && isNotHalf) {
                $(addborder_title).addClass('showborder');
            } else {
                $(addborder_title).removeClass('showborder');
            }
        }
        window.addEventListener('scroll', borderShow);
        //課程4大項目浮現
        function itemSlide() {
            var itemRange = document.getElementById('studies');
            var items = itemRange.getElementsByTagName('li');
            //觸發點
            $(items).each(function () {
                var slidetrigger = (window.scrollY + window.innerHeight) - this.clientHeight / 2 - 160;
                var itemBottom = this.offsetTop + this.clientHeight;
                var isHalf = slidetrigger > this.offsetTop;
                var isNotHalf = window.scrollY < itemBottom;

                if (isHalf && isNotHalf) {
                    $(this).addClass('studiesItem');
                } else {
                    $(this).removeClass('studiesItem');
                }
            })
        }
        window.addEventListener('scroll', itemSlide);
    }
});



