var express = require('express');
var router = express.Router();
var Info = require("../models/User");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/*登录
*/
router.get('/login', function (req, res, next) {
  //获得前端传来的数据
  var user = req.query;
  var userName = user.user_name;
  var userPass = user.user_password;
  //console.log(user);

  //查询数据库中相同用户名和密码的记录是否存在，如果存在则登录成功
  Info.findOne({
    username: userName,
    password: userPass
  }).then(function(userInfo) {
    //userInfo是这条记录的所有信息
    // console.log(userInfo);
    if (!userInfo) {
      //用户信息不存在,即空记录
      console.log("[SELECT ERROR] -  这条（用户名密码）记录不存在");
      res.send({ status: 400, msg: "用户名或者密码错误" });
      return;
    }
    res.send({
      status: 200,
      msg: "登陆成功",
      user_name: userInfo.username
    });
  });
});

/* 注册 */
router.post("/register", function(req, res, next) {
  let register = req.body;
  //console.log(register)
    Info.findOne({
      username: register.rname
    }).then(function (info) {
      //如果用户名存在，则返回信息告诉注册者已经存在
      //console.log(info);
      if (info) {
        res.send({ status: 201, msg: '用户名已经存在，请重新命名' });
      } else {
        //如果用户名不存在，则保存到数据库
        var newUser = new Info({
          username: register.rname,
          nickname:register.rnickname,
          password: register.rpassword,
        }).save().then(function (newUser) {
          console.log('保存新用户成功，新用户信息如下：');
          console.log(newUser);
          res.send({ status: 200, msg: '恭喜你注册用户成功' });
        });
      }
    });
  
});

/**得到所有病例 */
router.get('/askforbl',function(req,res,next){
  Info.find().then(function(infos){
    res.send({status:200, infos:infos})
  })
});

/**病人   得到一个病例 */
router.get('/askforonebl',function(req,res,next){
  //console.log(req.query.nickname)
  Info.findOne({
    nickname:req.query.nickname
  }).then(function(oneinfo){
    console.log(oneinfo);
    res.send({status:200, oneinfo:oneinfo})
  })
});

/**医生    得到一个病例 */
router.get('/askforonebldoc',function(req,res,next){
  //console.log(req.query.docname)
  Info.find({
    doctorname:req.query.docname
  }).then(function(docs){
    console.log(docs);
    res.send({status:200, docs:docs})
  })
});

/**    删除病例   */
router.get('/delbingli',function(req,res,next){
  Info.remove({
    _id:req.query.id
  }).then(function(){
    res.send({status:200, msg:"删除病例成功！"})
  })
});

/** 编辑   病例信息 */
router.post('/bianjixinxi',function(req,res,next){
  var form = req.body;
  console.log(form);
  //res.send({status:200, msg:"编辑病例成功！"})
  Info.updateOne({
    _id:form._id
  },{
    nickname:form.nickname,
    sex:form.sex,
    age:form.age,
    address:form.address,
    doctorname:form.doctorname,
    doctorzhenduan:form.doctorzhenduan,
  }).then(function(){
    res.send({status:200, msg:"编辑病例成功！"})
  });
})

/** 添加   病例信息 */
router.post('/tianjiabingli',function(req,res,next){
  let register = req.body;
  //console.log(register)
    Info.findOne({
      username: register.username
    }).then(function (info) {
      //如果用户名存在，则返回信息告诉注册者已经存在
      //console.log(info);
      if (info) {
        res.send({ status: 201, msg: '账号名已经存在，请更换！' });
      } else {
        //如果用户名不存在，则保存到数据库
        var newUser = new Info({
          username: register.username,
          nickname:register.nickname,
          password: register.password,
          sex: register.sex,
          age: register.age,
          address: register.address,
          doctorname: register.doctorname,
          doctorzhenduan: register.doctorzhenduan,

        }).save().then(function (newUser) {
          console.log('保存新用户成功，新用户信息如下：');
          console.log(newUser);
          res.send({ status: 200, msg: '成功新建病例' });
        });
      }
    });
})









module.exports = router;
