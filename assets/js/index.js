$(function () {
    new fullpage('#fullpage', {
        //options here
        autoScrolling: true,
        scrollHorizontally: true
    })


    $('.nav-btn').click(function () {
        $(this).toggleClass('nav-btn-active')
        $('.bs-collapse').slideToggle(300)
        // if ($(this).hasClass('nav-btn-active')) {
        //     $(this).removeClass('nav-btn-active')
        //     $(".head-active .logo").removeClass('showLogo');
        //     $(".head-active").removeClass("showWite");
        //     $('.head-mc').slideUp();
        // } else {
        //     $(this).addClass('nav-btn-active');
        //     $('.head-mc').slideDown();
        //     $(".head-active .logo").addClass('showLogo');
        //     $(".head-active").addClass("showWite");
        //     $('.head-active .logo img').attr('src', 'https://www.yuwell.com/web/bocweb/web/img2/logo-2.png?v=v1.2')
        // }
    })

})