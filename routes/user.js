var express=require('express');
var models=require('../models');
var util=require('../util');
var route=express.Router();
route.post('/login',function (req, res) {
	//获取请求体
	var user=req.body;//{email:email}
	//先查询一下此用户是否已经注册
	models.User.findOne(user,function (err, doc) {
		if(err){
			console.error(err);
			res.statusCode(500).send('注册失败');
		}else{
			if(doc){//如果有值表示此邮箱已经注册过了
				res.send(doc);
			}else{
				user.avatar='https://secure.gravatar.com/avatar/'+util.md5(user.email)+'?s=30';//30是图像大小的意思
				models.User.create(user,function (err, doc) {
					res.send(doc);
				})
			}
		}
	})
});

//把当前路由导出
module.exports=route;