<template>
  <div>
    <!-- 侧边栏标签 -->
    <!-- default-active 默认激活的菜单
        el-submenu 侧边栏中的元素
        slot 设置导航标题
        :unique-opened="true" 当js代码来执行
        :router开启后,进入vue-router模式,会将el-menu-item解析为
        router-link 将index解析为to属性
     -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :unique-opened="true"
      :router="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="1-1" class="el-icon-menu">用户列表</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item index="1-1" class="el-icon-menu">用户列表</el-menu-item>
      </el-submenu>     
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
