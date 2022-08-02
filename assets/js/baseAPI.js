//每次调用ajax前会先调用此函数
var _URL = 'http://127.0.0.1:8080'


$.ajaxPrefilter(function (options) {
  options.url = _URL + options.url
  //设置请求头
  // if (options.url.indexOf('/my/')) {
  //   options.headers = {
  //     Authorization: localStorage.getItem('token') || ''
  //   }
  // }
})