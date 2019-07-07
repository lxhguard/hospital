<template>
    <div>
        <div>
            <el-alert
                title="欢迎来到宝宝医院"
                type="success"
                :closable="false"
                center>
            </el-alert>
            <span style="position:absolute;right:0;top:0;">欢迎,{{this.username}}</span>
        </div>
        <br/><br/>
        <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>

        <div style="width:80%;margin:0 auto;position:relative;">
                <el-collapse v-model="activeName" style="width:450px;" accordion>
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

                <el-calendar style="position:absolute;top:0;right:0;width:500px;" v-model="value">
                </el-calendar>
        
        </div>

        
    </div>
</template>

<script>
export default {
    name:"Hospitaluser",
    data(){
        return {
            username:"",
            activeName: '1',
            value: new Date(),
        }
    },
    created() {
        this.username = localStorage.getItem("user_name");
        console.log(this.username)
    },
}
</script>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(n) {
    background-color: #99a9bf;
    background-image: url("http://chn.amc.seoul.kr/gb/images/lang/about/intro_img2.jpg");
    background-size: 100% 100%;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    background-image: url("http://chn.amc.seoul.kr/gb/images/lang/about/intro_img5.jpg");
    background-size: 100% 100%;
  }
</style>
