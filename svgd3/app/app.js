(function (){
	'use strict'

	angular
		.module('mapamexico',[])
		.directive('mapaMexico',mapaMexico)

	function mapaMexico(){

		var directive = {
			restric:'EA',
			templateUrl:'/partials/mapa.html',
			controller:mexicoController,		
			controllerAs:'mexico',
			replace:true,
		}
		return directive

	}

	mexicoController.$inject = ['$scope'];

	function mexicoController($scope){
		var mexico = this;
		mexico.list = [
			{'id':'MX-AGU','name':'Aguascalientes'},
			{'id':'MX-BCS','name':'Baja California Sur'},
			{'id':'MX-CAM','name':'Campeche'},
			{'id':'MX-DF','name':'Distrito Federal'},
		];
		mexico.over = null;

		var initialcolor = "#343999";
	    var overcolor =  "#89164E";
	    var paths = d3.selectAll("path");
	    paths.style("fill", initialcolor);


	    paths.on('mouseover', function(){
	      console.log(this.id);
	      mexico.over = this.id;
	      d3.select(this).style("fill", overcolor);
	      $scope.$apply();
	    });


	    paths.on('mouseout', function(){
	      d3.select(this).style("fill",initialcolor);
    });

	}

})();