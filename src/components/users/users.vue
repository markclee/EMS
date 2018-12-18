<template>
  <el-card class="box-card">
    <!-- 面包屑导航  导航的容器-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-input placeholder="请输入内容" class="input-with-select" v-model="search">
      <el-button slot="append" icon="el-icon-search" @click="searchBtn"></el-button>
    </el-input>
    <el-button type="success" plain @click="showAdd = true">添加用户</el-button>
    <!--表格
    data绑定数据源,property会自动获取data中的值
    label 设置列名-->
    <el-table :data="userData" hightlight-current-row border style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column property="username" label="姓名" width="180"></el-table-column>
      <el-table-column property="email" label="邮箱" width="180"></el-table-column>
      <el-table-column property="mobile" label="电话"></el-table-column>
      <el-table-column property label="状态">
        <template slot-scope="scope">
            <!-- scope.row是当前所子行绑定的数据源 -->
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope" width="200px">
          <el-button type="primary" icon="el-icon-edit" size="mini" plain></el-button>
          <el-button type="primary" icon="el-icon-delete" size="mini" plain></el-button>
          <el-button type="success" icon="el-icon-check" size="mini" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 
    layout控制组件显示的结构-->
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="currentPage"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <!-- 新增面板 -->
    <!--  对话框组件
      title 标题
    visible 控制元素-->
    <el-dialog title="收货地址" :visible.sync="showAdd">
      <el-form :model="form" label-position="right">
        <el-form-item label="用户名" label-width="80px">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="80px">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="80px">
          <el-input v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancleAdd">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
      pagenum: 1, //当前页码
      pagesize: 2, //每页显示几条
      currentPage: 3, //当前页数
      total: 0, //总条数
      search: "",
      showAdd: false,
      form: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      }
    };
  },
  methods: {
    async getAllData() {
      var res = await this.$http.get(
        `users?query=${this.search}&pagenum=${this.pagenum}&pagesize=${
          this.pagesize
        }`
      );
      var {
        data,
        meta: { msg, status }
      } = res.data;
      if (status === 200) {
        this.userData = data.users;
        this.total = data.total;
      }
    },
    sizeChange(val) {
      // val 改变分页时候,触发几条/页 数字
      this.pagesize = val;
      this.getAllData();
    },
    currentChange(val) {
      this.pagenum = val;
      this.getAllData();
    },
    searchBtn() {
      this.getAllData();
    },
    async add() {
      var res = await this.$http.post(`users`, this.form);
      console.log(res)
      
      var {
        data,
        meta: { msg, status }
      } = res.data;
      // console.log(data, msg, status)
      if (status === 201) {
        this.$message({
          message: msg,
          type: "success"
        });
      } else {
        this.$message.error(msg);
      }
      this.clearForm()
      this.showAdd = false;
    },
    cancleAdd(){
        this.showAdd = false
        this.clearForm();
    },
    clearForm(){
        for(var item in this.form){
            this.form[item] = ''
        }
    }
  },
  created() {
    this.getAllData();
  }
};
</script>

<style>
.input-with-select {
  width: 300px;
  margin-top: 15px;
}
</style>
