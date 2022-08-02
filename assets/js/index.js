$(function () {

    initTable()
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

    var tabData = 0;
    $('.page5-tab').on('click', 'span', function () {
        $(this).addClass('page5-tab-active').siblings().removeClass('page5-tab-active')
        tabData = $(this).attr('tab-data')
        $('.tab-item').each(function () {
            if (tabData == $(this).attr('tab-data')) {
                $(this).addClass('tab-item-active').siblings().removeClass('tab-item-active')
            }
        })
    })

})

// var URL = 'http://127.0.0.1:8080'
//获取前三条文章列表数据
function initTable() {
    $.ajax({
        method: 'GET',
        url: '/api/article/topthree',
        success: function (res) {
            if (res.status !== 0) return layui.layer.msg('获取文章列表失败')
            res.data.map(item => {
                return item.cover_img = URL + item.cover_img
            })
            // console.log(res);
            //使用模板引擎渲染数据
            var htmlStr = template('tpl-tab', res)
            $('.page5-inner').append(htmlStr)
        }
    })
}

//标准化
template.defaults.imports.formatData = function (value) {
    var tab = 0
    switch (value) {
        case "行业动态":
            tab = 1
            break
        case "新闻资讯":
            tab = 2
            break
        case "法律法规":
            tab = 3
            break
    }
    return tab
}

//美化时间过滤器
template.defaults.imports.dateFormat = function (date) {
    const dt = new Date(date)

    var m = padZero(dt.getMonth() + 1)
    var d = padZero(dt.getDate())

    return m + '-' + d
}

function padZero(n) {
    return n > 9 ? n : '0' + n
}