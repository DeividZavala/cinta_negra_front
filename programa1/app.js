(function(){
	'use strict'

	angular
		.module('movies',[])
		.controller('movieController',movieController);

	function movieController(){
		var first = this;

		first.collection = [
		{
			'name':'harry-potter and the goblet of fire',
			'image':'http://2.bp.blogspot.com/-EnLJsgKZVuk/T6QdYfuTyZI/AAAAAAAACVs/LsNeUu7eoqE/s1600/harry-potter.jpg',
			'actores':['Daniel Radcliffe','Rupert Grint','Emma Watson','Ralph Fiennes','Michael Gambon','Brendan Gleeson'],
			'year':2005,
			'genero':'ciencia ficcion'
		},

		{
			'name':'Rapido y Furioso',
			'image':'http://4.bp.blogspot.com/-Z79PvPZ-9ko/UJnOyeWZ8KI/AAAAAAAAANg/3KnrSLf4fiw/s1600/R%C3%A1pido+Furioso.jpg',
			'actores':[	'Vin Diesel','Paul Walker','Michelle Rodriguez','Jordana Brewster','Rick Yune'],
			'year':2001,
			'genero':'accion'
		},

		{
			'name':'the lord of the rings',
			'image':'http://vignette2.wikia.nocookie.net/eldragonverde/images/2/2f/Las_dos_torres.jpg/revision/latest?cb=20131205160743&path-prefix=es',
			'actores':['Elijah Wood','Ian McKellen','Liv Tyler','Viggo Mortensen','Sean Astin','Cate Blanchett','John Rhys-Davies'],
			'year':2002,
			'genero':'ciencia ficcion'
		},

		];
	}

})();