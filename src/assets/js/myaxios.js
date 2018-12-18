import axios from 'axios'
// 创建一个插件对象
var myaxios = {}
// 添加一个方法
// Vue的构造函数
// 将axios作为实例方法添加到vue实例中
myaxios.install = function (Vue) {
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
  Vue.prototype.$http = axios
}
// 导出
export default myaxios
