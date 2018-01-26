// workman.js

var workmanapp = angular.module('workmanapp', ['ui.bootstrap']);

workmanapp.controller('apptestctrl', function($scope){
	$scope.testObj = {
		angTest: "OK"
	}
});

workmanapp.controller('workmanctrl', function($scope){
	
});