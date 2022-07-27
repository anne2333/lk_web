$(function () {
    $('.nav-btn').click(function () {
        $(this).toggleClass('nav-btn-active')
        $('.bs-collapse').slideToggle(300)
    })
    $('.logo-item').on('mouseenter', function () {
        $(this).addClass('logo-item-active')
    })
    $('.logo-item').on('mouseleave', function () {
        $(this).removeClass('logo-item-active')
    })


    $('.page5-tab').on('click', 'span', function () {
        $(this).addClass('page5-tab-active').siblings().removeClass('page5-tab-active')
    })
})