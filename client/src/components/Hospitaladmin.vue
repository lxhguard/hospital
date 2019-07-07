<template>
    <div style="margin-top:0;">
        
        <el-alert
            title="医院管理者界面"
            type="success"
            description=""
            center
            :closable="false"
            show-icon>
        </el-alert>
        <el-row class="tac" style="width:20%;height:100%;float:left;">
            <el-col :span="12">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1" @click="bingli">
                    <i class="el-icon-document"></i>
                    <span slot="title" >病例查询</span>
                </el-menu-item>
                <el-menu-item index="2"  @click="bianji">
                    <i class="el-icon-menu"></i>
                    <span slot="title">病例管理</span>
                </el-menu-item>
                <el-menu-item index="3" @click="tianjia">
                    <i class="el-icon-document"></i>
                    <span slot="title">病例添加</span>
                </el-menu-item>
                <el-menu-item index="4" @click="about">
                    <i class="el-icon-setting" ></i>
                    <span slot="title">关于我们</span>
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <div style="width:78%;float:right;">
            <router-view name="right"/>
        </div>
    </div>
</template>

<script>
export default {
    name:"Hospitaladmin",
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      bingli(){
          this.$router.push('/bingli');
      },
      bianji(){
          this.$router.push('/bianji');
      },
      tianjia(){
          this.$router.push('/tianjia');
      },
      about(){
          this.$router.push('/about');
      },

 
    }
    
}
</script>

<style scoped>

</style>
