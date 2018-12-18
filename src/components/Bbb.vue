<template>
    <div>
        <h2>我是 {{msg}}</h2>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Bbb 组件'
        }
    }
}
</script>

<style>
    h2 {
        font-size: 100px;
    }
</style>
