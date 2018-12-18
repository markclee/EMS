<template>
    <div class="login">
        <el-form label-position="top" :model="loginObj" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <h2>用户登录</h2>
        <el-form-item label="用戶名">
            <el-input type="password" v-model="loginObj.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密碼" prop="checkPass">
            <el-input type="password" v-model="loginObj.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" class="myBtn" @click="submit">登录</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // 綁定一個對象
            loginObj : {
                username : 'admin',
                password : '123456'
            }
        }
    },
    methods : {
        // submit(){
        //     this.$http.post('login', this.loginObj)
        //     .then(res=>{
        //         var {data, meta:{msg, status}} = res.data;
        //         // 保存服务器,返回给浏览器的token,当浏览器再次登录时候,记录登录状态
        //         window.localStorage.setItem('token', data.token)
        //         if(status === 200){
        //            this.$message({
        //                 message: '恭喜你，这是一条成功消息',
        //                 type: 'success'
        //            });
        //             this.$router.push('/home');
        //         }else {
        //             this.$message.error('错了哦，这是一条错误消息');
        //         }
        //     })
        // }
        async submit(){
            var res = await this.$http.post('login', this.loginObj)
            var {data, meta:{msg, status}} = res.data
            window.localStorage.setItem('token', data.token)
            if(status === 200){
                this.$message({
                    message : '恭喜你,这是一条成功的消息',
                    type:'success'
                });
                this.$router.push('/home');
            }else{
                this.$message.error('错了哦，这是一条错误消息');
            }
        }
    }
}
</script>

<style>
    .login {
        background-color: #324152;
        height: 100%;
        position:relative;
    }
    .el-form {
        width: 500px;
        background-color: #fff;
        position:absolute;
        left: 50%;
        top: 50%;
        /* margin-left:-250px;
        margin-top: -250px; */
        transform: translate(-50%,-50%);
        border-radius: 5px;
        padding: 30px;
    }
    .myBtn {
        width: 100%;
    }
</style>
