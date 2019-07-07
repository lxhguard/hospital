<template>
  <div id="app">
    <el-alert
    title="医院电子病例管理系统"
    type="success"
    center
    :closable="false">
  </el-alert>
  <br/>
  <div style="width:400px;margin:0 auto;">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户登录" name="first">
        账号：<el-input
              placeholder="请输入账号"
              v-model="user_name"
              clearable>
            </el-input>
        密码：<el-input placeholder="请输入密码" v-model="user_password" show-password></el-input>
        <br/>
        <el-button type="success" @click="LoginIn">登录</el-button>
      </el-tab-pane>
      <el-tab-pane label="用户注册" name="second">
        账号：<el-input
              placeholder="请输入账号"
              v-model="registerUser.rname"
              clearable>
            </el-input>
        姓名：<el-input
              placeholder="请输入姓名"
              v-model="registerUser.rnickname"
              clearable>
            </el-input>
        密码：<el-input placeholder="请输入密码" v-model="registerUser.rpassword" show-password></el-input>
        <br/>
        <el-button type="success" @click="RegisterNew">注册</el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
    
  </div>
</template>

<script>
import {isMail} from '../../static/common/common.js'
import {isLegal} from '../../static/common/common.js'
import {isRange} from '../../static/common/common.js'

export default {
  name: 'Login',
  data() {
      return {
        activeName: 'first',
        user_name: '',
        user_password: '',
        registerUser:{
          rname:'',
          rnickname:'',
          rpassword:'',
        },
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      // 用户登录
        LoginIn(){
            var Send_params = {};
            Send_params = {
              "user_name":this.user_name,
              "user_password":this.user_password
            };
            if (Send_params.user_name == '') {
              this.$message('用户名不能为空');
            }else{
              if (Send_params.user_password == '') {
                this.$message('密码不能为空!');
              }else{
                //登录接口
                this.$axios({
                  url:"http://localhost:4444/users/login",
                  method:"get",
                  params:Send_params
                })
                .then(res=>{


                    //登录成功 跳转index
                    if(res.data.status == 200){
                      //本地存储 token 和 user_name
                      localStorage.setItem('user_name', res.data.user_name);
                      if(res.data.user_name == 'admin'){
                        this.$message('管理员登录成功');
                        this.$router.push('/hospitaladmin');
                      }else{
                        this.$message('普通病人登录成功');
                        this.$router.push('/hospitaluser');
                      }
                      
                    }else{
                      this.$message(res.data.msg);
                      this.$router.push('/login');
                    }
                    
                })
                .catch(err=>{
                    console.log(err)
                })
              }//end 密码是否为空
            }//end 用户名是否为空
        },
      // 注册新用户
        RegisterNew(){
          
          if(this.registerUser.rname.length) {
            if(isRange(this.registerUser.rname,0,12)){
					    if(isRange(this.registerUser.rpassword,0,16)){
                  this.$axios({
                      url:"http://localhost:4444/users/register",
                      method:"post",
                      data:this.registerUser
                  })
                  .then(res=>{
                      if(res.data.status == 200){
                        this.$message(res.data.msg);
                        this.registerUser = {
                                              rname:'',
                                              rpassword:'',
                                            };
                      }else{
                        this.$message(res.data.msg);
                      }
                  })
                  .catch(err=>{
                      console.log(err)
                  })
              }else{
                this.$message('您的密码长度应该在1-16位！');
              }
            }else{
              this.$message('用户名长度最大为12个字母');
            }
          }else{
            this.$message('用户名不能为空!');
          }

        },
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
