<template>
  <el-container>
    <el-header>
      <!-- 顶部导航 -->
      <Top/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- 侧边栏 -->
        <Aside/>
      </el-aside>
      <el-main>
        <!-- 使用路由渲染 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 导入top
import Top from "@/components/common/top.vue";
// 导入Aside
import Aside from "@/components/common/aside.vue";
export default {
  // 验证是否有token,
  beforeCreate() {
    var token = window.localStorage.getItem("token");
    if (!token) {
      this.$router.push({ name: "login" });
    }
    // 所有的axios请求里边,设置一个请求头
    // 只有在home页面中 登录的页面 需要带上token 
    // 在login里边的不需要token
    this.$http.defaults.headers.common['Authorization'] = token;
  },
  components: {
    Top,
    Aside
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
/* 给父容器设置高度百分之百 */
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
