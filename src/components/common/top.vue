<template>
  <el-row>
    <el-col :span="3">
      <div>此处有logo图</div>
    </el-col>
    <el-col :span="19">
      <div class="title">佳能电商管理</div>
    </el-col>
    <el-col :span="2">
      <div class="exit" @click="logOut">
        <a style="cursor:pointer">退出</a>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logOut() {
      this.$confirm("确认退出", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
					window.localStorage.removeItem("token");
      		this.$router.push("/login");
          this.$message({
            type: "success",
						message: "退出成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消退出"
          });
        });
    }
  }
};
</script>

<style>
.title {
  color: #fff;
  font-size: 24px;
}
.exit {
  color: #fff;
  font-size: 12px;
}
</style>
