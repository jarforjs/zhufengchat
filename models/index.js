var mongoose=require('mongoose');
var model=require('./model');
mongoose.connect('mongodb://localhost/201605zfchat');
//根据schema定义模型
exports.User=mongoose.model('User',model.User);