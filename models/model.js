var mongoose=require('mongoose');
exports.User=new mongoose.Schema({
	email:{type:String},
	avatar:{type:String}
});