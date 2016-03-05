(function (){
	'use strict';

	angular.module('myapp',['ngResource'])
		.factory('apiUsers',apiUsers)
		.controller('mycontroller',mycontroller);

	apiUsers.$inject = ['$resource'];

	function apiUsers($resourse){
		return $resourse('/users/:id',{},{});
	}

	mycontroller.$inject = ['apiUsers'];

	function mycontroller(apiUsers){
		var mcs = this;
		mcs.welcome = "Hola";

		mcs.users = apiUsers.query();
	}
})();