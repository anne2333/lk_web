$(function () {
  //面包屑点击事件换成更多点击事件
  if (history.scrollRestoration) history.scrollRestoration = 'manual'
  $('.head .more').click(function () {
    $('.bs-collapse').slideToggle(300)
  })


  $('.nav-banner').on('click', 'a', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })

})

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