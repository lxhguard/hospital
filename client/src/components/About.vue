<template>
    <div>
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="宝宝医院 在线简介" name="1">
                <div>是中国领先的互联网医疗平台。经过12年的诚信运营，已经在图文问诊、电话问诊、远程视频门诊、预约和转诊、诊后疾病管理、线上复诊、家庭医生、医生点评、知识科普等多个领域取得领先地位。</div>
            </el-collapse-item>
            <el-collapse-item title="业务介绍" name="2">
                <div>图文问诊、电话问诊：患者可以通过好大夫在线，与医生在线沟通或电话沟通，获得基于病情的专家建议，减少患者（尤其是外地患者）的就医成本。</div>
                <div>远程专家门诊：全国知名专家的视频门诊。患者在当地医生的帮助下，找北京、上海等地的专家网上视频看病，由专家为患者出具诊疗方案，并由当地医生在本地实施治疗。</div>
            </el-collapse-item>
            <el-collapse-item title="发展历程" name="3">
                <div>2006年，聚集基础数据，建成覆盖全国的医院/医生数据库，推出医生点评、投票系统。</div>
                <div>2010年，开始诊后管理业务，建立多疾病领域的诊后管理平台，研发科学规范的诊后管理工具。</div>
                <div>2017年，首创远程专家门诊服务，助力分级诊疗。</div>
            </el-collapse-item>
            <el-collapse-item title="医院荣誉" name="4">
                <div>2015年度最佳O2O应用</div>
                <div>2017年 中国医疗创新团队奖</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name:"About",
    data() {
      return {
        activeName: '1'
      }
    }

}
</script>

<style scoped>

</style>
