var myApp = angular.module("myApp", []);

// The angular object is a global object created by the AngularJS JavaScript which is included at the beginning of the page.
myApp.controller('myController', ['$scope', function($scope){
	$scope.hello = {};
	$scope.arr1= ["apple", "orange", "kiwi"];

	$scope.items  = [ {text : "one"}, {text : "two"}, {text : "three"}, {text : "four"} ];
	$scope.itemFilter = function (item){  // this item is being passed from view
		// Notice the | filter: itemFilter part of the declaration above. That part is the filter definition. The | filter: part tells AngularJS to apply a filter to the myData.items array. The itemFilter is the name of the filter function. This function has to be present on the $scope object, and it has to return either true or false. If the filter function returns true, then the element from the array is used by the ng-repeat directive. If the filter function returns false, the element is ignored. Here is an example:
		if (item.text == "two"){
			return false;
		}
		return true;
	};
	
}]);

// we get op 
// {"text":"one"}
// {"text":"three"}
// {"text":"four"}