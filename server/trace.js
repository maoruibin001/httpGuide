/**
 * Created by lenovo on 2017/9/29.
 */
const express = require('express');
const path = require('path');

const app = express();

function resolve(dir) {
  return path.resolve(__dirname, dir);
}

app.use(express.static('static'));

app.route('/')
  .get(function (req, res) {
    res.sendFile(resolve('./static/trace.html'));
  })
  .post(function (req, res) {
    res.send('i am post')
  })
  .trace(function (req, res) {
    res.send('i am trace');
  });
app.get('/tt', function(req, res) {
  console.log(33333333333)
  res.status(301);
  res.redirect('http://www.baidu.com');
})
app.get('/index', function(req, res) {
  console.log(44444444)
  res.sendFile(resolve('./static/index2.html'))
})

app.get('/hello', function(req, res) {
  res.send(resolve('./static/1.js'));
})
app.listen(8088, function() {
  console.log('server start at: localhost:8088');
});