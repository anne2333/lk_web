$(function () {

    $('.nav-btn').click(function () {
        $(this).toggleClass('nav-btn-active')
        $('.bs-collapse').slideToggle(300)
    })

    $('.a_title').on('mouseenter', function () {
        var src = $(this)[0].children[0].src
        src = src.substr(0, src.length - 4)
        console.log(src);
        $(this)[0].children[0].src = src + '1.png'
    })
    $('.a_title').on('mouseleave', function () {
        var src = $(this)[0].children[0].src
        src = src.substr(0, src.length - 5)
        console.log(src);
        $(this)[0].children[0].src = src + '.png'
    })
})