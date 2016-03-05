(function(){
	'use strict';

	angular.module('myapp',['ngResource'])
		.factory('apiUsers',apiUsers)
		.directive('cardUser',cardUser)
		.controller('mycontroller',mycontroller);

	function cardUser(){
		var directive = {
			restrict: 'EA',
			templateUrl: '/partials/carduser.html',
			scope:{
				data: '=',
			},
			controller: cardController,
			controllerAs: 'cardinfo',
			bindToController: true,
			replace : true
		};
		return directive;
	}

	function cardController(){
		var cardinfo = this;
		cardinfo.text = 'Hola Mundo'
		cardinfo.alert = cardalert;

		function cardalert(params){
			console.log(params)
		}
	}


	apiUsers.$inject = ['$resource'];

	function apiUsers($resource){
		return $resource('/users/:id',{},{});
	};

	mycontroller.$inject = ['apiUsers']

	function mycontroller(apiUsers){
		var mc = this;
		mc.hello = 'hola';
		mc.show = show;
		mc.users = apiUsers.query();

		function show(user){
			console.log(user);
		}
	};
})();