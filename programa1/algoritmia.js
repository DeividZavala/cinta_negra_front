var obj=5;

var obj={"numero":1, "nombre":"Juan", "alumno": true };

var f= function() {
	return {
	 "a" : 4,
	 "b" : function () { return 3},
	 "c" : "hola"
	}
};

var obj2= [{"nombre":"alex", "apellido": "ramirez","edad": 21,
"inscrito":true},
{"nombre":"julio", 0 : "martinez","edad": 20,
"inscrito":false}];


var o= function () {
	return{
		"a" : function(){ return [2,3] },
		"b" : [{"a":1},{"a":2},{"a":3}],
		"c" : function(){return 4+5}

	}
};

var a= o().b[0].a;
var b= o().b[1].a;


Problem:

Being a new Uber user, you have $20 off your first ride. 
You want to make the most out of it and drive in the fanciest 
car you can afford, without spending any out-of-pocket money.

There are 5 options, from the least to the most expensive:
	"UberX",
	"UberXL",
	"UberPlus",
	"UberBlack",
	"UberSuv"

You know the length "l" of your ride in miles and how much
one mile costs for each car. Find the best car you can afford.

Example:


For l = 30, and (dollars per mile)fares = [0.3,0.5,0.7,1,1.3], 
the output should be "UberXL".

Construct a function that solve this problem.

With the structure fancyRide(l,fares){...}


Solution:

var fares = [0.3,0.5,0.7,1,1.3];

function fancyRide(l,fares){
	var cars=["UberX","UberXL","UberPlus","UberBlack","UberSuv"];
	var answer;
	for(var i=0;i<5;i++){
		if(l*fares[i] < 20)
		{
			answer = cars[i];
		}
	}

	return answer;
}

fancyRide(30,[0.3,0.5,..]);



