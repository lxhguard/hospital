<template>
    <div>
                <el-input v-model="inputnickname" placeholder="请输入病人姓名" width="200"></el-input>
                <el-button type="primary" @click="searchname">搜索</el-button>
                <el-table
                    :data="oneinfo"
                    style="width: 100%">
                    <el-table-column
                        prop="username"
                        label="病例账号名"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="nickname"
                        label="姓名"
                        width="100">
                    </el-table-column>
                    <el-table-column
                        prop="sex"
                        label="性别"
                        width="80">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="现居住地址"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="doctorname"
                        label="主治医生"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="doctorzhenduan"
                        label="诊断详情"
                        width="280">
                    </el-table-column>
                    <el-table-column
                        prop="doctorzhenduan"
                        label="操作"
                        width="280">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                            <el-button  @click="handleClickdel(scope.row)" type="text" size="small">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>

                <br/><br/>

                <el-form style="width:400px;margin:0 auto;" ref="form" :model="form" label-width="80px" v-show="appear">
                    <el-alert
                        title="病例"
                        type="info"
                        effect="dark"
                        :closable="false"
                        center>
                    </el-alert>
                    <br/>
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
                        <el-button type="primary" @click="makesure">确认</el-button>
                        <el-button @click="quxiao">取消</el-button>
                    </el-form-item>
                </el-form>

    </div>
</template>

<script>
import Qs from 'qs'

export default {
    name:"Bianji",
    data(){
        return{
            inputnickname:'',
            oneinfo:[],
            appear:false,
            form:{}, 
            
        }
    },
    methods:{
        searchname(){
            this.$axios({
                  url:"http://localhost:4444/users/askforonebl",
                  method:"get",
                  params:{nickname:this.inputnickname}
                })
                .then(res=>{
                    if(res.data.oneinfo != null){
                        this.oneinfo.push(res.data.oneinfo);
                        this.inputnickname = "";
                    }else{
                        this.$message('该病人不存在!');
                        this.inputnickname = "";
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
        },
        handleClick(row) {
            this.appear = true;
            this.form = row;
        },
        quxiao(){
            this.appear = false;
            this.form = {};
        },
        handleClickdel(row) {
            this.$axios({
                  url:"http://localhost:4444/users/delbingli",
                  method:"get",
                  params:{id:row._id}
                })
                .then(res=>{
                    if(res.data.status == 200){
                        this.$message(res.data.msg);
                        this.inputnickname = "";
                        this.oneinfo = [];
                    }else{
                        this.$message('后台错误!');
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
        },
        makesure(){
            this.$axios({
                  url:"http://localhost:4444/users/bianjixinxi",
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
    }

}
</script>

<style scoped>

</style>
