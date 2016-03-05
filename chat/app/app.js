(function (){
	'use strict'

	angular.module('chat',['firebase'])
		.controller('chatController',chatController);

	chatController.$inject = ['$firebaseArray'];


	function chatController($firebaseArray){

		var link = new Firebase('https://chatcintanegrafrontd.firebaseio.com/messages')

		var chat = this;
		chat.hi = 'hola';
		chat.messages = $firebaseArray(link);

		chat.addMessage = addMessage;

		function addMessage(){
			chat.messages.$add({
				'nick': chat.nick,
				'message': chat.text,
			});

			chat.text = '';
		}
	}

})();