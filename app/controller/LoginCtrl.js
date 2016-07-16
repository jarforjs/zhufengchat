angular.module('zfchat').controller('LoginCtrl',function ($scope,$http,$location) {
	//实现用户的登陆,把用户填写的邮箱发送到后台
	$scope.login=function () {
		//$http是$.ajax的封装
		$http({
			url:'/user/login',
			method:'POST',
			data:{email:$scope.email}
		}).success(function (user) {
			//向上级作用域发射
			$scope.$emit('login',user)
			//登录成功后要跳转到房间列表
			$location.path('/rooms');//路径跳转
		}).error(function (error) {
			$location.path('/');//路径跳转
		});
	}
})