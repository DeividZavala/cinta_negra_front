(function(){
	'use strict'

	angular
		.module('youtubeplayer',['ngResource'])
		.directive('youtubePlayer',youtubePlayer)

	youtubePlayer = []

	function youtubePlayer(){
		var directive = {
			restrict:'EA',
			templateUrl:'/partials/youtube.html',
			scope: {
				id: "=",
			},
			controller:youtubeController,
			controllerAs:'youtube',
			bindToController:true,
			replace:true
		};
		return directive;
	}

	youtubeController.$insert = ["$sce"];

	function youtubeController($sce){
		var youtube = this;
		youtube.video = null;
		console.log(youtube.id)
		youtube.base = 'https://www.youtube.com/embed/'
		youtube.video = $sce.trustAsResourceUrl(youtube.base+youtube.id);

	}

})();