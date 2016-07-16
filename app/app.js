angular.module('zfchat',['ngRoute','angularMoment']).config(function ($routeProvider) {//配置路由
	$routeProvider.when('/',{
		templateUrl:'pages/login.html',
		controller:'LoginCtrl'
	}).otherwise({
		redirectTo:'/'
	})
})