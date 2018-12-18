# 钩子函数

## CMUD

## beforeCreate

- 在 Vue 刚刚开始进行实例化的时候触发
```javascript
function Vue(options) {
    this.options.beforeCreate && this.options.beforeCreate()
    this.a = this.data.a
    this.fn = this.methods.fn
    // this.options.created && this.options.created()
}
```
- 什么都拿不到
  - 一般用来做一些 BOM 事件的注册
  - 或者做一些和 vue 无关的事情
  - 使用频率 0 ~ 5 

## created

- 在 Vue 初始化实例之后,这个时候数据已经拿到了
- 可以拿到数据,但是没有 DOM 结构
  - 操作数据
  - 一般会在这里发送 ajax 请求,请求的内容是页面一打开就要渲染的内容
  - 90 ~ 95

## beforeMount

- 在 Vue 胫骨哦自己的语法渲染 DOM 之前
```HTML
<div> 
    {{ msg }}
    <com-one />
</div>
```
- 可以拿到数据,可以拿到一个渲染之前的 DOM 结构
- 只能说注册一些和 DOM 无关的事件
- 或者做一些不会被替换的标签的 事件委托
- 10 ~ 15

## mounted

- 在 Vue 进行 DOM 渲染之后
```HTML
<div>hello vue.js</div>
```
- 能拿到数据
- 能拿到渲染之后的 DOM 结构
- 各种操作 DOM
- 80 ~ 85

## beforeUpdate
- 组件更新的时候触发
- 组件内的数据更新的时候不触发
- 服务端渲染没有用
- 监听数据的变化或者组件的变化
- 0 ~ 5

## updated
<!-- - 当数据更新的时候触发 -->
- 组件更新的时候触发
- 组件内的数据更新的时候不触发
- 服务端渲染没有用
- 监听数据的变化或者组件的变化
- 0 ~ 5

## beforeDestroy
- 组件销毁前触发
- 服务端渲染没有用
- 一般用在组件销毁的时候使用
- 当我们切换组件的时候,就会执行销毁
- 清除定时器
- 70 ~ 75

## destroyed
- 组件销毁前触发
- 服务端渲染没有用
- 一般用在组件销毁的时候使用
- 当我们切换组件的时候,就会执行销毁
- 清除定时器
- 70 ~ 75
