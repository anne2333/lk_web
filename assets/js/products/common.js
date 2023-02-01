$(function () {
  //面包屑点击事件换成更多点击事件
  $('.nav-banner .active').click()
  if (history.scrollRestoration) history.scrollRestoration = 'manual'
  $('.head .more').click(function () {
    $('.bs-collapse').slideToggle(300)
  })

  $('.nav-banner').on('click', 'a', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })
  $('.left').on('click', 'a', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })

  $('#pageBox').on('click', 'span', function () {
    // $(this).addClass('active').siblings().removeClass('active')
    var pagenum = $(this).data('pagenum')
    var sd = $('.nav-banner .active span')[0].innerText
    var xl = $('.content .left .active')[0].innerText
    initTable(pagenum, sd, xl)
  })
})

function initTable(pagenum, sd, xl) {
  var q = {
    pagenum: pagenum,
    pagesize: 6,
    sd: sd,
    xl: xl,
  }
  $.ajax({
    method: 'GET',
    url: '/api/product/list',
    data: q,
    success: function (res) {
      if (res.status !== 0) return
      //使用模板引擎渲染数据
      res.data.map(item => {
        return item.image = URL + item.image
      })
      var htmlStr = template('tpl-list', res)
      $('.right .link').empty().html(htmlStr)
      var page = {
        data: toArray(Math.ceil(res.total / 6))
      }
      var htmlStr = template('tpl-pagination', page)
      $('#pageBox').empty().html(htmlStr)
      $('#pageBox').children().eq(res.pagenum - 1).addClass('active')
    }
  })
}

function toArray(n) {
  var arr = []
  for (let i = 0; i < n; i++) {
    arr[i] = i
  }
  return arr
}

