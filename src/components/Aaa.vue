<template>
    <div>
        <h2>我是 {{msg}}</h2>
    </div>
</template>

<script>
export default {
    created () {
        this.timer = setInterval(() => {
            console.log(123)
        }, 100);
    },
    data () {
        return {
            msg: 'Aaa 组件',
            timer: 0
        }
    },
    beforeDestroy () {
        // console.log('我被销毁了')
        // clearInterval(this.timer)
    },
    destroyed () {
        console.log('我被销毁了')
        clearInterval(this.timer)
    }

}
</script>

<style>
    h2 {
        font-size: 100px;
    }
</style>
