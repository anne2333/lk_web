$(function () {
  if (location.search) {
    var id = location.search.split('=')[1]
    //根据id获取文章内容
    $.ajax({
      method: 'GET',
      url: '/api/article/' + id,
      success: function (res) {
        if (res.status !== 0) return
        $('.ht').html(res.data[0].content)
        //使用模板引擎渲染数据
        var htmlStr = template('tpl-article', res)
        $('.hp').empty().html(htmlStr)
      }
    })
  }
})

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