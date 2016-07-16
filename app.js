var express=require('express');
var path=require('path');
var app=express();
var bodyParser=require('body-parser');
var user=require('./routes/user');//加载用户路由
//把app目录作为静态文件根目录
app.use(express.static(path.resolve('app')));
//把public目录作为静态文件根目录
app.use(express.static(path.resolve('public')));
//当用户访问/的时候放回我们的主页
app.get('/',function (req, res) {
	res.sendFile(path.resolve('./app/index.html'))
});

app.use(bodyParser.json());//把请求体转成对象放在req.body上

app.use('/user',user);

var server=require('http').createServer(app);
server.listen(8080,function () {
	console.log('服务已启动,端口号8080');
});