var mongoose = require('mongoose');

//用户信息的表结构
module.exports = new mongoose.Schema({
  //账号名
  username: String,
  //病人名
  nickname: {
    type: String,
    default: '暂无'
  },
  //密码
  password: String,
  //性别,
  sex:{
    type: String,
    default: '暂无'
  },
  //年龄
  age:{
    type:Number,
    default:18
  },
  //居住地址
  address:{
    type: String,
    default: '地球哦'
  },
  //病情描述
  description:{
      type:String,
      dfault:'暂无'
  },
  //医生
  doctorname:{
      type:String,
      default:"暂无"
  },
  //诊断
  doctorzhenduan:{
      type:String,
      default:"尚未诊断"
  }
});