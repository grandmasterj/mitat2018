// workman.js

var workmanapp = angular.module('workmanapp', ['ui.bootstrap']);

workmanapp.controller('apptestctrl', function($scope){
	$scope.testObj = {
		angTest: "OK"
	}
});

workmanapp.controller('workmanctrl', function($scope){

	$scope.resultsObj = [
		{ "value": 'A', "text": "A" }, 
		{ "value": 'B', "text": "B" },
		{ "value": 'C', "text": "C" },
		{ "value": 'S', "text": "S" },
		{ "value": 'F', "text": "F" }
		];

	$scope.districtsObj = [
		{ "value": 'Ampara', "text": "Ampara" }, 
		{ "value": 'Anuradhapura', "text": "Anuradhapura" },
		{ "value": 'Badulla', "text": "Badulla" },
		{ "value": 'Batticaloa', "text": "Batticaloa" },
		{ "value": 'Colombo', "text": "Colombo" }, 
		{ "value": 'Galle', "text": "Galle" },
		{ "value": 'Gampaha', "text": "Gampaha" },
		{ "value": 'Hambantota', "text": "Hambantota" },
		{ "value": 'Jaffna', "text": "Jaffna" }, 
		{ "value": 'Kalutara', "text": "Kalutara" },
		{ "value": 'Kandy', "text": "Kandy" },
		{ "value": 'Kegalle', "text": "Kegalle" },
		{ "value": 'Kilinochchi', "text": "Kilinochchi" }, 
		{ "value": 'Kurunegala', "text": "Kurunegala" },
		{ "value": 'Mannar', "text": "Mannar" },
		{ "value": 'Matale', "text": "Matale" },
		{ "value": 'Matara', "text": "Matara" }, 
		{ "value": 'Monaragala', "text": "Monaragala" },
		{ "value": 'Mullaitivu', "text": "Mullaitivu" },
		{ "value": 'Nuwara Eliya', "text": "Nuwara Eliya" },
		{ "value": 'Polonnaruwa', "text": "Polonnaruwa" }, 
		{ "value": 'Puttalam', "text": "Puttalam" },
		{ "value": 'Ratnapura', "text": "Ratnapura" },
		{ "value": 'Trincomalee', "text": "Trincomalee" },
		{ "value": 'Vavuniya', "text": "Vavuniya" }
		];

	// $scope.alHM = {
	// 	value: "F"
	// }
	// $scope.alPhy = {
	// 	value: "F"
	// }
	// $scope.alBio = {
	// 	value: "F"
	// }
	// $scope.alCM = {
	// 	value: "F"
	// }
	// $scope.alChe = {
	// 	value: "F"
	// }
	// $scope.alICTEng = {
	// 	value: "F"
	// }
	// $scope.alEng = {
	// 	value: "F"
	// }
	// $scope.olMath = {
	// 	value: "F"
	// }
	// $scope.olEng = {
	// 	value: "F"
	// }

	// delete this method after dev
	$scope.testClick = function(){
		// alert($scope.olEng.value);
		alert($ngPrestine);
	}
});