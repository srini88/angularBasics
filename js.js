var myApp = angular.module("myApp", []);

// The angular object is a global object created by the AngularJS JavaScript which is included at the beginning of the page.
myApp.controller('myController', ['$scope', function($scope){
	$scope.hello = {};
	$scope.valueIs= 1;
	
}]);