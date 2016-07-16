angular.module('zfchat',['ngRoute','angularMoment'])
	.config(function ($routeProvider) {//配置路由
	$routeProvider.when('/',{
		templateUrl:'/pages/login.html',
		controller:'LoginCtrl'
	}).when('/rooms',{
		templateUrl:'/pages/rooms.html',
		controller:'RoomsCtrl'
	}).otherwise({
		redirectTo:'/'
	});
}).run(function ($rootScope,$location) {//run是系统启动后第一个任务,一般用来注册监听
	if(sessionStorage.user){
		$rootScope.user=JSON.parse(sessionStorage.user);
	}
	if(!$rootScope.user){
		$location.path('/');
	}
	$rootScope.$on('login',function (event,user) {
		$rootScope.user=user;
		sessionStorage.user=JSON.stringify(user);
	})
});