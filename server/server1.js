/**
 * Created by lenovo on 2017/9/28.
 */
const express = require('express');

const app = express();

app.all('*', function(req, res, next) {
  next();
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By",' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
  // next();
});

app.get('/', function(req, res) {
  console.log(3333333)
  res.send('hello world')
})

app.listen(8089, function() {
  console.log('server start at:localhost:8089');
});