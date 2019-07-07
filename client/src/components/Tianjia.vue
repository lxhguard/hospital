<template>
    <div>
        <br/><br/><br/>
        <el-form style="width:400px;margin:0 auto;" ref="form" :model="form" label-width="80px" >
                    <el-alert
                        title="添加病例"
                        type="info"
                        effect="dark"
                        :closable="false"
                        center>
                    </el-alert>
                    <br/>
                    <el-form-item label="账号名">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="form.nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select v-model="form.sex" placeholder="请选择性别">
                        <el-option label="男" value="男"></el-option>
                        <el-option label="女" value="女"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="现居住地">
                        <el-input v-model="form.address"></el-input>
                    </el-form-item>
                    <el-form-item label="主治医生">
                        <el-input v-model="form.doctorname"></el-input>
                    </el-form-item>
                    <el-form-item label="病情描述">
                        <el-input type="textarea" v-model="form.doctorzhenduan"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="tianjiabingli">添加病例</el-button>
                        <el-button type="warning" @click="quxiao">取消</el-button>
                    </el-form-item>
                </el-form>
    </div>
</template>
<script>
export default {
    name:"Tianjia",
    data(){
        return{
            form:{},
        }
    },
    methods:{
        tianjiabingli(){
            this.$axios({
                  url:"http://localhost:4444/users/tianjiabingli",
                  method:"post",
                  data:this.form
                })
                .then(res=>{
                    this.appear = false;
                    if(res.data.status == 200){
                        this.$message(res.data.msg);
                        this.inputnickname = "";
                        this.form = {};
                    }else{
                        this.$message('后台错误!');
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
        },
        quxiao(){
            this.form = {};
            this.$message("取消添加病例！");
        },
    }
    
}
</script>
<style scoped>

</style>
