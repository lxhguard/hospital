<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="所有病例">
                <el-button type="primary" @click="askforbingli">查看所有</el-button>
                 <el-table
                    :data="allbinglis"
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
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="病人名">
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
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="主治医生">
                <el-input v-model="inputdocname" placeholder="请输入医生姓名" width="200"></el-input>
                <el-button type="primary" @click="searchonedocname">搜索</el-button>
                <el-table
                    :data="onedoc"
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
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

export default {
    name:"Bingli",
    data(){
        return{
            allbinglis:[],
            inputnickname:'',
            inputdocname:'',
            oneinfo:[],
            onedoc:[],

        }
    },
    methods: {
        askforbingli(){
            this.$axios({
                  url:"http://localhost:4444/users/askforbl",
                  method:"get",
                })
                .then(res=>{
                    this.allbinglis = res.data.infos;
                })
                .catch(err=>{
                    console.log(err);
                })
        },
        searchname(){
            this.$axios({
                  url:"http://localhost:4444/users/askforonebl",
                  method:"get",
                  params:{nickname:this.inputnickname}
                })
                .then(res=>{
                    if(res.data.oneinfo != null){
                        this.oneinfo = [];
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
        searchonedocname(){
            this.$axios({
                  url:"http://localhost:4444/users/askforonebldoc",
                  method:"get",
                  params:{docname:this.inputdocname}
                })
                .then(res=>{
                    console.log(res.data.docs)
                    if(res.data.docs != []){
                        this.onedoc = res.data.docs;
                        this.inputdocname = "";
                    }else{
                        this.$message('该医生不存在!');
                        this.inputdocname = "";
                    }
                })
                .catch(err=>{
                    console.log(err);
                })
        },
        
    },
    
}
</script>


<style scoped>

</style>
