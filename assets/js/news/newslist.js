$(function () {
  initTable('行业动态', 1)
  $('.content .right').on('click', 'span', function () {
    $(this).addClass('active').siblings().removeClass('active')
    initTable($(this)[0].innerText, 1)

  })
  $('#pageBox').on('click', 'span', function () {
    var pagenum = $(this).data('pagenum')
    var cate_name = $('.content .right .active')[0].innerText
    var toolTop = $(".content").offset().top;
    initTable(cate_name, pagenum)
    document.documentElement.scrollTop = toolTop;
    // $('#banner').children().removeClass('active1')

  })

  //获取文章列表数据
  function initTable(cate_name, pagenum) {
    var q = {
      pagenum: pagenum,
      cate_name: cate_name,
    }
    $.ajax({
      method: 'GET',
      url: '/api/article/list',
      data: q,
      success: function (res) {
        if (res.status !== 0) return
        res.data.map(item => {
          return item.image = URL + item.cover_img
        })
        //使用模板引擎渲染数据
        var htmlStr = template('tpl-list', res)
        $('.news-list').empty().html(htmlStr)
        var page = {
          data: toArray(Math.ceil(res.total / 6))
        }
        var htmlStr = template('tpl-pagination', page)
        $('#pageBox').empty().html(htmlStr)
        $('#pageBox').children().eq(res.pagenum - 1).addClass('active')
      }
    })
  }
})
function toArray(n) {
  var arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = i
  }
  return arr
}
//美化时间过滤器
template.defaults.imports.dateFormat = function (date) {
  const dt = new Date(date)
  var y = dt.getFullYear()
  var m = padZero(dt.getMonth() + 1)
  var d = padZero(dt.getDate())

  return y + '-' + m + '-' + d
}

function padZero(n) {
  return n > 9 ? n : '0' + n
}
