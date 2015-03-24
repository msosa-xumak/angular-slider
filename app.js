angular.module('app', ['ui.slider'])
	.controller('MainCtrl', function($scope) {
		$scope.test = 82;
		$scope.label = 'age';

		$scope.updateValue = function(key, value) {
			console.log(key, value);
		};

		$scope.transformValue = function(value) {
			var feet = Math.floor(parseInt(value) / 12);
			var inches = parseInt(value) % 12;

			return feet + '′' + ' ' + inches + '\″';
		};
	});