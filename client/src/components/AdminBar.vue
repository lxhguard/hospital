<template>
    <div>
        <el-alert
            title="医院管理者界面"
            type="success"
            description=""
            center
            :closable="false"
            show-icon>
        </el-alert>
        <el-row class="tac" style="width:30%;height:100%;">
            <el-col :span="12">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1">
                    <i class="el-icon-document"></i>
                    <span slot="title" @click="bingli">病例查询</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" >
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"AdminBar"    
}
</script>

<style scoped>

</style>
