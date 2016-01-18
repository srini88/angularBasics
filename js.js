var myApp = angular.module("myApp", []);

// The angular object is a global object created by the AngularJS JavaScript which is included at the beginning of the page.
myApp.controller('myController', ['$scope', function($scope){
	$scope.hello = {};
	$scope.sample = "srini is awesome";
	$scope.arr1= ["apple", "orange", "kiwi"];
}]);

myApp.filter("myOwnFilter", function(){    // not working when I remove one funct and put everything at root
	return function(boo){
		return boo + "  motheryaar";
	}
});

// we get op 
// {"text":"one"}
// {"text":"three"}
// {"text":"four"}