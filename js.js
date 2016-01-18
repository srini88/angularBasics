var myApp = angular.module("myApp", []);

// The angular object is a global object created by the AngularJS JavaScript which is included at the beginning of the page.
myApp.controller('myController', ['$scope', function($scope){
	$scope.hello = {};
	$scope.arr1= ["apple", "orange", "kiwi"];

	$scope.items  = [ {text : "one"}, {text : "two"}, {text : "three"}, {text : "four"} ];
	$scope.today = new Date();
	
}]);

// we get op 
// {"text":"one"}
// {"text":"three"}
// {"text":"four"}