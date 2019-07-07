var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//加载数据库模块
var mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//解决跨域
app.all('*', function (req, res, next) {
  //将外源设为指定的域，比如：http://localhost:8080
  res.header("Access-Control-Allow-Origin", "*");
  //将Access-Control-Allow-Credentials设为true  允许携带cookie
  res.header('Access-Control-Allow-Credentials', true); 
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("deviceCode", 'A95ZEF1-47B5-AC90BF3');
  //配置options的请求返回,解决axios的post自定义头部字段问题
  // if (res.getMethod().equals("OPTIONS")) {
  //   HttpUtil.setResponse(response, HttpStatus.OK.value(), null);
  //   return;
  // }
  //返回数据格式为json字符串
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//连接数据库
//mongod --dbpath=/Users/wanggonggege/Desktop/hospital/server/db --port=27020
mongoose.connect('mongodb://localhost:27020/hospital', function (err) {
  if (err) {
    console.log(err);
    console.log('数据库连接失败！');
  } else {
    console.log("数据库连接成功！");
  }
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
